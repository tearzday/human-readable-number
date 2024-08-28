module.exports = function toReadable (number) {
  let result = ''
  let lastNumber = number % 10; // 536 -> 6
  let secondNumber = Math.trunc(number / 10) % 10;// 536 -> 3
  let twoLastNumber = number % 100;// 536 -> 36
  let firstNumber = Math.trunc(number / 100); // 536 -> 5

  let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let figures = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  if(number == 0) {
    return 'zero'
  }

  if(firstNumber > 0) {
    result += numbers[firstNumber - 1] + ' hundred '
  }


  if(twoLastNumber >= 10 && twoLastNumber <= 19) {
    result += figures[lastNumber]
  }

  if(twoLastNumber >= 20 && twoLastNumber <= 99) {
    result += dozens[secondNumber - 2]
  }

  if(twoLastNumber <= 9 && twoLastNumber > 0) {
    result += numbers[lastNumber - 1]
  }

  if(lastNumber >= 1 && (twoLastNumber >= 20 && twoLastNumber <= 99)) {
    result += ' ' + numbers[lastNumber - 1]
  }

  return result.trim()
}
