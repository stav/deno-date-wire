export function date (wcfDate: string) { // "/Date(1649946960000)/"
  const timestamps = wcfDate.match(/\d+/)
  if (timestamps) {
    return new Date(+timestamps[0])
  }
}
