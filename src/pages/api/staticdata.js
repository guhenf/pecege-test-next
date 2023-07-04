import path from 'path'
import { promises as fs } from 'fs'

import {
  sortProductsByHighestPrice,
  sortProductsByLowestPrice,
} from '../../functions/functions.js'

export default async function handler(req, res) {
  const sortHighestToLowest = req.query.sort === 'high-to-low'
  const sortLowestToHighest = req.query.sort === 'low-to-high'

  const jsonDirectory = path.join(process.cwd(), 'json')
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8')

  const data = JSON.parse(fileContents).products

  if (sortHighestToLowest) {
    res.status(200).json(sortProductsByHighestPrice(data))
  }
  if (sortLowestToHighest) {
    res.status(200).json(sortProductsByLowestPrice(data))
  } else {
    res.status(200).json(data)
  }
}
