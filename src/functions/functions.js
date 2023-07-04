export const sortProductsByLowestPrice = (data) => {
  return data.sort((a, b) => a.price - b.price)
}

export const sortProductsByHighestPrice = (data) => {
  return data.sort((a, b) => b.price - a.price)
}
