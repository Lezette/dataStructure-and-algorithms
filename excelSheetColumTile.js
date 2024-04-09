/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  // const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  // const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  // const alphabet = alpha.map((x) => String.fromCharCode(x));
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

  const array = breakNum(columnNumber)

  let toAlpha = array.map((value) => {
    let index = value - 1

    return alphabet[index]
  })
  return toAlpha.join('').toUpperCase()
};

const breakNum = (num) => {

  const arr = []
  let cn = num
  let length = 26

  while (true) {
    let mod = cn % length

    if (cn <= 26) {
      arr.unshift(cn)
      break;
    }

    if (mod === 0) {
      mod = 26
      cn = cn - 1
    }

    arr.unshift(mod)

    cn = Math.floor(cn / 26)
  }

  return arr
}



console.log(convertToTitle(28));
console.log(convertToTitle(702));
