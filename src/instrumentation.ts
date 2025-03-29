export const register = async () => {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { server } = await import("@/lib/msw/setup/server");
    server.listen();
  }
};
