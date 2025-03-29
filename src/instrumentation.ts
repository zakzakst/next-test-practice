export async function register() {
  console.log("[i] %s %d", process.env.NEXT_RUNTIME, process.pid);
  // "msw/node"がNode.jsランタイムでのみ利用可能（=Edgeランタイムで利用不可）
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // const { initMocks } = await import("@/lib/msw");
    // initMocks();
    const { server } = await import("@/lib/msw/setup/server");
    server.listen();
  } else {
    const { worker } = await import("@/lib/msw/setup/browser");
    worker.start();
  }
}
