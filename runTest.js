export function runTest({
  res,
  exp,
  index,
  startTime = Date.now(),
  timeLimit = Infinity,
}) {
  index++;
  const runTime = Date.now() - startTime;
  if (runTime > timeLimit) {
    console.log("Test", index, "Timeout");
    console.log({ runTime, timeLimit });
    return;
  }
  if (res === exp) {
    console.log("Test", index, "Passed");
  } else {
    console.log("Test", index, "Failed");
    console.table({ res, exp });
  }
}
