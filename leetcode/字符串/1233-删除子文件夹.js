/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  const sortFolder = folder.sort();
  const result = [sortFolder[0]];

  for (let i = 1; i < sortFolder.length; i++) {
    if (sortFolder[i].match(result[result.length - 1] + '/')?.index !== 0) {
      result.push(sortFolder[i]);
    }
  }

  return result;
};

const result = removeSubfolders(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]); // [ '/a', '/c/d', '/c/f' ]
// const result = removeSubfolders(["/a","/a/b/c","/a/b/d"]) // [ '/a' ]
// const result = removeSubfolders(["/a/b/c","/a/b/ca","/a/b/d"]); // [ '/a/b/c', '/a/b/ca', '/a/b/d' ]

console.log(result);
