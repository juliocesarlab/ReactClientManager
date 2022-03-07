export function inputsCheck(inputsArr) {
  if (inputsArr.some(input => input.length === 0)) return false
  return true
}