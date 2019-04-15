"use strict";

import cluster from "cluster";
import os from "os";

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  // master process
  console.log(`Master ${process.pid} is running`); // eslint-disable-line no-console

  console.log(`We will create ${numCPUs} Workers`); // eslint-disable-line no-console
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("online", (worker) => {
    console.log(`Worker ${worker.process.pid} is online`); // eslint-disable-line no-console
  });

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`); // eslint-disable-line no-console
    console.log("Starting a new worker"); // eslint-disable-line no-console
    cluster.fork();
  });
} else {
  // worker process
  require("./server");
}
