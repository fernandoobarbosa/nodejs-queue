import "dotenv/config";
import express from "express";
import {
  ExpressAdapter,
  createBullBoard,
  BullAdapter,
  BullMQAdapter,
} from "@bull-board/express";

import UserController from "./app/controllers/UserController";
import Queue from "./app/lib/Queue";

const app = express();

const queues = Queue.queues.map((queue) => queue.bull);
const bullQueues = queues.map((queue) => new BullAdapter(queue));
const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");

const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({
  queues: bullQueues,
  serverAdapter: serverAdapter,
});

app.use(express.json());
app.post("/users", UserController.store);

app.use("/admin/queues", serverAdapter.getRouter());

app.listen(3000, () => {
  console.log("listening on port 3000");
});
