/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = {};
  dp[0] = 0;
  for (let i = 1; i < amount + 1; i++) {
    dp[i] = Infinity;
  }
  for (let a = 1; a < amount + 1; a++) {
    for (const c of coins) {
      if (a - c >= 0) {
        dp[a] = Math.min(dp[a], 1 + dp[a - c]);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

[
  { coins: [186, 419, 83, 408], amount: 6249, exp: 20 },
  { coins: [1, 2, 5], amount: 11, exp: 3 },
  { coins: [2], amount: 3, exp: -1 },
  { coins: [1], amount: 0, exp: 0 },
].forEach(runTest);

function runTest({ coins, amount, exp }, index) {
  index++;
  const s = Date.now();
  const res = coinChange(coins, amount);
  const runTime = Date.now() - s;
  if (runTime > 600) {
    console.log("Test", index, "Failed");
    console.log({ runTime });
    return;
  }
  if (res === exp) {
    console.log("Test", index, "Passed");
  } else {
    console.log("Test", index, "Failed");
    console.table({ res, exp });
  }
}
