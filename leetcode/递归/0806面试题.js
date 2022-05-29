/** 步骤拆解
 * 假设已经开始挪最后一个盘子
 * 1、需要先把前n-1个盘子移到辅助盘
 * 2、把最后一个盘子移到目标盘
 * 3、把前n-1个盘子从辅助盘移到目标盘
 * 其中，步骤1可以拆解为子问题(辅助盘看为目标盘，目标盘看为辅助盘)
 * 不断拆解为n--个盘子的移动问题，循环1-3步骤 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
 var hanota = function(A, B, C) {
  const n = A.length;
  move(n, A, B, C);
  // console.log(C);
};

function move(n, from, medium, to) {
  if(n === 1) {
    to.push(from.pop());
    return;
  }
  move(n-1, from, to, medium);
  to.push(from.pop());
  move(n-1, medium, from, to);
}

const result = hanota([5, 4, 3, 2, 1, 0], [], []);