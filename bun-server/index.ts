import build from "./build";

const server = Bun.serve({
  port: 8005,
  async fetch(req) {
    const url = new URL(req.url);

    // Handle CORS preflight requests
    if (req.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    if (url.pathname === "/") {
      return new Response("Hello from Mac's Server!");
    }

    if (url.pathname === "/jsx") {
      const id = url.searchParams.get('id');
      console.log("\nRequest received at " + url);
      switch (id) {
        case '1':
          return build('App.jsx');

        case '2':
          return build('App.tsx')
      }
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at http://localhost:${server.port}`);