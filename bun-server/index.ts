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
      const transpiler = new Bun.Transpiler({
        loader: "tsx",
      });
      console.log("Request received at /")

      // Read and transpile the TSX file
      const sourceCode = await Bun.file("src/App.tsx").text();
      const result = await transpiler.transform(sourceCode);

      return new Response(result, {
        headers: {
          "Content-Type": "application/javascript",
          "Access-Control-Allow-Origin": "*", // Add this line
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    if (url.pathname === "/jsx") {
      await Bun.build({
        entrypoints: ['./src/App.jsx'],
        outdir: './dist',
      });

      console.log("Request received at /jsx");

      const buildOutput = await Bun.file("./dist/App.js").text();
      return new Response(buildOutput, {
        headers: {
          "Content-Type": "application/javascript",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at http://localhost:${server.port}`);