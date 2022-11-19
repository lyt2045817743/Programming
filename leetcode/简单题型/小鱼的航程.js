
/**
 * 题目描述：有一只小鱼，它上午游泳150公里，下午游泳100公里，晚上和周末都休息（实行双休日)。假设从周x(1<=x<=7)开始算起，请问这样过了n天以后，小鱼一共累计游泳了多少公里呢？
 * 输入描述：输入两个整数x,n(表示从周x算起，经过n天，n在long int范围内）。
 * 输出描述：输出一个整数，表示小鱼累计游泳了多少公里。
 * 
 * 示例：
 * 输入：3 10
 * 输出：2000
 */

// 方法1：时间复杂度太高！！！！！！！！！！！！
// class Solution {
//   solution(arr) {
//       var result = 0;

//       // TODO: 请在此编写代码
//       let [x, n] = arr;
//       for(let i = 0; i < n; i++) {
//         const yushu = x % 7;
//         if(yushu !== 6 && yushu !== 0) {
//             result += 250;
//         }
//         x++;
//       }

//       return result;
//   }
// }

// 方法二
class Solution {
  solution(arr) {
      var result = 0;

      // TODO: 请在此编写代码
      let [x, n] = arr;
      const weekCount = Math.floor(n / 7);
      const extraDaysCount = n % 7;
      result += weekCount * 250 * 5;
      for(let i = 0; i < extraDaysCount; i++) {
        const week = x % 7;
        if(week !== 6 && week !== 0) {
            result += 250;
        }
        x++;
      }

      return result;
  }
}

// var str_0 = readline();
var str_0 = '3 105438258092354';
var line_list_0 = str_0.trim().split(" ");        
var arr = new Array();
for(var i = 0; i < line_list_0.length; i++){
  arr[i] = parseInt(line_list_0[i]);
}
      

let sol = new Solution();
result = sol.solution(arr);
// print(result);
console.log(result);