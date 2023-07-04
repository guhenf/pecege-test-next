export const searchProducts = (data, inputText) => {
  inputText.toLowerCase()

  const list = data.filter((item) => {
    const carBrand = item.brand
    const carModel = item.model
    return (
      carBrand.toLowerCase().includes(inputText) ||
      carModel.toLowerCase().includes(inputText)
    )
  })
  return list
}

export const filterProductsByPrice = (data, minValue, maxValue) => {
  return data.filter(
    (item) => item.price >= Number(minValue) && item.price <= Number(maxValue)
  )
}

export const sortProductsByLowestPrice = (data) => {
  return data.sort((a, b) => a.price - b.price)
}

export const sortProductsByHighestPrice = (data) => {
  return data.sort((a, b) => b.price - a.price)
}
