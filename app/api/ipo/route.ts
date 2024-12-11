import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rate-limit";

// Create a rate limiter
const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 1000,
});

export async function GET(request: Request) {
  try {
  
    try {
      await limiter.check(100, "IPO_API_CACHE");
    } catch {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    // 2. Validate Request Origin
    const headersList = await headers();
    const referer = headersList.get("referer");
    const allowedOrigins = [
      "http://localhost:3001",
      "https://tradejini-ipo.vercel.app",
    ];

    if (
      !referer ||
      !allowedOrigins.some((origin) => referer.startsWith(origin))
    ) {
      return NextResponse.json(
        { error: "Unauthorized request origin" },
        { status: 403 }
      );
    }

    // 3. Input Validation
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const ipoId = searchParams.get("id");

    // 4. Add Request Timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    let apiUrl;
    // Determine which API to call based on parameters
    if (ipoId) {
      // Get specific IPO details
      apiUrl = `https://api.tradejini.com/v2/ipo/details?id=${ipoId}`;
    } else if (status && ["open", "closed"].includes(status)) {
      // Get IPO list
      apiUrl = `https://api.tradejini.com/v2/ipo/list?status=${status}`;
    } else {
      clearTimeout(timeoutId);
      return NextResponse.json(
        { error: "Invalid parameters" },
        { status: 400 }
      );
    }

    // 5. Make the API call
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${process.env.AUTH_TOKEN}`,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();

    // 6. Cache the response
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    });
  } catch (error) {
    // 7. Error Logging
    console.error("IPO API Error:", error);

    if (error instanceof Error && error.name === "AbortError") {
      return NextResponse.json({ error: "Request timeout" }, { status: 408 });
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
