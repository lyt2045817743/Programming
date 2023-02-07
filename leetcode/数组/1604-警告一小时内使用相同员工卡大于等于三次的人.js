/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  const result = [];
  let firstTimeIdx = 0;

  const map = createNameTimeMap(keyName, keyTime);
  const keys = Object.keys(map);

  for (let i = 0; i < keys.length; i++) {
    const times = map[keys[i]].sort();
    firstTimeIdx = 0;
    for (let j = 1; j < times.length; j++) {
      if (isInOneHour(times[firstTimeIdx], times[j])) {
        if (j - firstTimeIdx === 2) {
          result.push(keys[i]);
          break;
        }
      } else {
        firstTimeIdx = j - firstTimeIdx === 1 ? j : j - 1;
      }
    }
  }

  return result.sort();
};

var createNameTimeMap = function (names, times) {
  const map = {};
  for (let i = 0; i < names.length; i++) {
    const key = names[i];
    if (map[key]) {
      map[key].push(times[i]);
    } else {
      map[key] = [times[i]];
    }
  }
  return map;
};

var isInOneHour = function (time1, time2) {
  const [h1, m1] = time1.split(":");
  const [h2, m2] = time2.split(":");
  if (h2 === h1) {
    return true;
  } else if (h2 - h1 === 1) {
    return m2 <= m1;
  }
  return false;
};

const result = alertNames(["daniel","daniel","daniel","luis","luis","luis","luis"], ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]) // [ 'daniel' ]
// const result = alertNames(["alice","alice","alice","bob","bob","bob","bob"], ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"]) // [ 'bob' ]
// const result = alertNames(["john","john","john"], ["23:58","23:59","00:01"]); // []
// const result = alertNames(["leslie","leslie","leslie","clare","clare","clare","clare"], ["13:00","13:20","14:00","18:00","18:51","19:30","19:49"]); // [ 'clare', 'leslie' ]
// const result = alertNames(
//   ["a", "a", "a", "a", "a", "b", "b", "b", "b", "b", "b"],
//   [
//     "23:20",
//     "11:09",
//     "23:30",
//     "23:02",
//     "15:28",
//     "22:57",
//     "23:40",
//     "03:43",
//     "21:55",
//     "20:38",
//     "00:19",
//   ]
// ); // ['a']
console.log(result);
