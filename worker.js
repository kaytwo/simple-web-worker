onmessage = function (e) {
  console.log("Worker: Message received from main script");
  let ctr = 0;
  while (true) {
    for (let i = ctr; i < ctr + 1000000; i++) {}
    postMessage(`I counted to ${i} by time ${Date.now()}`);
  }
};
