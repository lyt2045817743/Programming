// 方法一
// function flatten(arr) {
//     return arr.toString().split(',').map(function(item) {
//         return Number(item);
//     })
// }

console.log(flatten([1,2,[3,4,[5,6]]]));

// 方法二
function flatten(arr) {
    return arr.join(',')
    .split(',')
    .map(function(item) {
        return parseInt(item);
    })
}