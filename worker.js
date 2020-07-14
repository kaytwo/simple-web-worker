onmessage = function (e) {
  console.log("Worker: Message received from main script");
  let ctr = 0;
  while (true) {
    for (let i = 0; i < 1000000; i++) {
      ctr += 1
    }
    postMessage(`I counted to ${ctr} by time ${Date.now()}`);
  }
};
