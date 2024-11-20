export default async function build(file: string) {
    const fileName = file.split('.');
    console.log(fileName);

    await Bun.build({
        entrypoints: [`./src/${file}`],
        outdir: './dist',
    });

    const buildOutput = await Bun.file(`./dist/${fileName[0]}.js`).text();
    console.log("Build Success")
    return new Response(buildOutput, {
        headers: {
            "Content-Type": "application/javascript",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    });
}