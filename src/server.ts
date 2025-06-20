import app from "./app";
import { env } from "./env";

const startServer = async () => {
  try {
    const port = env.PORT;

    await app.listen({ port, host: "0.0.0.0" });

    console.log(`🚀 Server running at http://localhost:${port}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

startServer();
