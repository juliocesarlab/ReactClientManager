export function orderArr(arr) {
  arr.sort((a, b) => a.name.localeCompare(b.name))
  return arr
}