const getParams = (url) => {
  // str为？之后的参数部分字符串
  const str = url.split('#')[0].substr(url.indexOf('?') + 1)
  // arr每个元素都是完整的参数键值
  const arr = str.split('&')
  // result为存储参数键值的集合
  const result = {}
  for (let i = 0; i < arr.length; i++) {
      // item的两个元素分别为参数名和参数值
      const item = arr[i].split('=')
      result[item[0]] = item[1]
  }
  return result
}

const result = getParams('https://www.google.com.hk/search?q=url%E5%8F%82%E6%95%B0%E8%A7%A3%E6%9E%90+js&oq=url%E5%8F%82%E6%95%B0%E8%A7%A3%E6%9E%90+js&aqs=chrome..69i57.2577j0j1&sourceid=chrome&ie=UTF-8#hash');
console.log(result);