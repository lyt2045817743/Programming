/**
 * @param {string} queryIP
 * @return {string}
 */
 var validIPAddress = function(queryIP) {
  if(isIPv4(queryIP)) {
    return 'IPv4';
  }
  if(isIPv6(queryIP)) {
    return 'IPv6'
  }
  return 'Neither';
};

/** 满足IPv4的格式 x1.x2.x3.x4
 * 1、xi中的i=4
 * 2、0 <= xi <= 255
 * 3、不能包含 前导零
 */
function isIPv4(queryIP) {
  const queryIPArr = queryIP.split('.');
  if(queryIPArr.length !== 4) return false;
  for(let i = 0; i < queryIPArr.length; i++) {
    const val = queryIPArr[i];
    if(val < 0 || val > 255 || Number(val).toString() !== val ) {
      return false;
    }
  }
  return true;
}

/** 满足IPv6的格式 x1:x2:x3:x4:x5:x6:x7:x8
 * 1、xi中的i=8
 * 2、1 <= xi.length <= 4
 * 3、xi 是一个 十六进制字符串，且大小写都可以
 * 4、允许前导零
 */
function isIPv6(queryIP) {
  const queryIPArr = queryIP.split(':');
  if(queryIPArr.length !== 8) return false;
  for(let i = 0; i < queryIPArr.length; i++) {
    const val = queryIPArr[i];
    if(val.length < 1 || val.length > 4) return false;

    const valTo16Str = Number(parseInt(val, 16)).toString(16);
    if(val.toLowerCase() !== valTo16Str.padStart(val.length, '0')) {
      return false;
    }
  }
  return true;
}

let result;
// result = validIPAddress('192.168.1.0'); // IPv4
// result = validIPAddress('192.168.1.00'); // Neither
// result = validIPAddress('192.168@1.1'); // Neither
// result = validIPAddress('192.168.1.0.1'); // Neither
// result = validIPAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334'); // IPv6
// result = validIPAddress('2001:db8:85a3:0:0:8A2E:0370:7334'); // IPv6
// result = validIPAddress('02001:0db8:85a3:0000:0000:8a2e:0370:7334'); // Neither
result = validIPAddress('2001:0db8:85a3::8A2E:037j:7334'); // Neither
console.log(result);