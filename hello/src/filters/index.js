// demo
const testFilters = (value, maxlen) => {
  return 'testFilters' + value + maxlen
}

const money = value => {
  const reg = /(?!^)((?=((?!\.)\d{3})+(?!\.)$)|(?=(\d{3})+\.\d+$))/g
  return parseFloat(value).toFixed(2).toString().replace(reg, ',')
}

export default {
  testFilters,
  money
}

// 使用方法：
// xxx | testFilters
