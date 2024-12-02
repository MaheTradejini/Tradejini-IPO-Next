export function rateLimit({ interval, uniqueTokenPerInterval }: { interval: number, uniqueTokenPerInterval: number }) {
  const tokenCache = new Map();

   // Ensure cache doesn't exceed uniqueTokenPerInterval
   if (tokenCache.size >= uniqueTokenPerInterval) {
    tokenCache.clear();
  }
  
  return {
    check: (limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = tokenCache.get(token) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, [1, Date.now()]);
          resolve();
        } else {
          const currentTime = Date.now();
          const timeInterval = currentTime - tokenCount[1];
          
          if (timeInterval < interval) {
            if (tokenCount[0] >= limit) {
              reject('Rate limit exceeded');
            } else {
              tokenCount[0]++;
              tokenCache.set(token, [tokenCount[0], tokenCount[1]]);
              resolve();
            }
          } else {
            tokenCache.set(token, [1, Date.now()]);
            resolve();
          }
        }
      }),
  };
}
