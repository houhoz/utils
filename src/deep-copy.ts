/**
 *深拷贝
 *
 * @export
 * @param {*} source 要拷贝的对象
 * @returns 深拷贝结果
 */

const deepCopy: any = function (source: any) {
  var dest
  if (Array.isArray(source)) {
    dest = []
    for (let i = 0; i < source.length; i++) {
      dest[i] = deepCopy(source[i])
    }
  } else if (toString.call(source) === '[object Object]') {
    dest = {}
    for (var p in source) {
      if (source.hasOwnProperty(p)) {
        dest[p] = deepCopy(source[p])
      }
    }
  } else {
    dest = source
  }
  return dest
}

export default deepCopy
