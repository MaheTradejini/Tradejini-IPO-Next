
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  
  try {
    const response = await fetch(`https://guest-api.tradejini.com/ipo/list?status=${status}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${process.env.AUTH_TOKEN}`, // Use server-side env variable
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch IPO data' }, { status: 500 });
  }
}