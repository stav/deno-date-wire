const tsre = new RegExp(/\d+/)

export function timestamp (wcfDate: string) { // "/Date(1649946960000)/"
  const timestamps = wcfDate.match(tsre)
  if (timestamps) {
    return +timestamps[0]
  }
}

export function date (wcfDate: string) { // "/Date(1649946960000)/"
  const ts = timestamp(wcfDate)
  if (ts) {
    return new Date(ts)
  }
}
