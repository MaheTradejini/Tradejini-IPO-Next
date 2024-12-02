// apiService.js
export async function fetchIpoData() {
    const authToken = process.env.Auth_Token || "";
    try {
      const response = await fetch("https://api.tradejini.com/v2/ipo/list?status=open", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authToken,
        }
      });
      if (!response.ok) {
        throw new Error("Failed to fetch IPO data");
      }
      const data = await response.json();
      return data.d; // Only return the 'd' array
    } catch (error) {
      console.error("Error fetching IPO data:", error);
      return [];
    }
  }
  