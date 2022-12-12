var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const aWidth = ax2 - ax1;
  const aHeight = ay2 - ay1;
  const bWidth = bx2 - bx1;
  const bHeight = by2 - by1;

  const aArea = aWidth * aHeight;
  const bArea = bWidth * bHeight;
  const result = aArea + bArea;
  console.log("aWidth", aWidth);
  console.log("aHeight", aHeight);
  console.log("bWidth", bWidth);
  console.log("bHeight", bHeight);
  console.log(aArea, bArea, result);

  // 不相交
  if (bx1 >= ax2 || ax1 >= bx2 || ay1 >= by2 || by1 >= ay2) {
    return result;
  }

  let commonWidth = 0;
  let commonHeight = 0;
  if (bx2 > ax2 && bx1 > ax1) {
    commonWidth = ax2 - bx1;
  } else if (ax2 > bx2 && ax1 > bx1) {
    commonWidth = bx2 - ax1;
  } else {
    commonWidth = Math.min(aWidth, bWidth);
  }
  if (by2 > ay2 && by1 > ay1) {
    commonHeight = ay2 - by1;
  } else if (ay2 > by2 && ay1 > by1) {
    commonHeight = by2 - ay1;
  } else {
    commonHeight = Math.min(aHeight, bHeight);
  }
  console.log("commonWidth", commonWidth);
  console.log("commonHeight", commonHeight);

  return result - commonWidth * commonHeight;
};

// const arr = [-3, 0, 3, 4, 0, -1, 9, 2];
const arr = [-2, -2, 2, 2, -2, -2, 2, 2]
const result = computeArea(...arr);
console.log(result);
