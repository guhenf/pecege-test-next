import path from 'path'
import { promises as fs } from 'fs'

import {
  sortProductsByHighestPrice,
  sortProductsByLowestPrice,
  searchProducts,
  filterProductsByPrice,
} from '../../functions/functions.js'

export default async function handler(req, res) {
  const { sort, search, minPrice, maxPrice } = req.query

  const jsonDirectory = path.join(process.cwd(), 'json')
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8')

  let data = JSON.parse(fileContents).products

  if (sort === 'highToLow') {
    data = sortProductsByHighestPrice(data)
  }
  if (sort === 'lowToHigh') {
    data = sortProductsByLowestPrice(data)
  }
  if (search) {
    data = searchProducts(data, search)
  }
  if (minPrice || maxPrice) {
    data = filterProductsByPrice(data, minPrice || 0, maxPrice || Infinity)
  }
  return res.status(200).json(data)
}
