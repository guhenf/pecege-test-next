import useSWR from 'swr'
import { useState } from 'react'
import List from '@/components/List'
import styles from '@/styles/Home.module.css'

import SortDown from '@/assets/sort-down.svg'
import SortUp from '@/assets/sort-up.svg'
import RotateLeft from '@/assets/rotate-left.svg'
import MagnifyingGlass from '@/assets/magnifying-glass.svg'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Article() {

  const [sort, setSort] = useState('')
  const [text, setText] = useState('')
  const [search, setSearch] = useState('')

  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const { data } = useSWR(
    `api/staticdata?sort=${sort}&minPrice=${minPrice}&maxPrice=${maxPrice}&search=${search}`,
    fetcher
  )

  return (
    <div className={styles.content}>
      <aside>
        <div className={styles.search}>
          <input onChange={(e) => {
            setText(e.target.value)
          }} className={styles.searchInput} placeholder='Buscar produtos...' />
          <MagnifyingGlass onClick={() => setSearch(text)} />
        </div>
        <div className={styles.priceBox}>
          <p className={styles.priceText}>Filtro e Ordenagem por Precos</p>
          <div className={styles.sorts}>
            <SortUp
              onClick={() => {
                setSort('highToLow')
              }}
            />
            <RotateLeft
              className={styles.rotateLeft}
              onClick={() => {
                setSort('')
              }}
            />
            <SortDown
              onClick={() => {
                setSort('lowToHigh')
              }}
            />
          </div>
          <div className={styles.ranges}>
            <input value={minPrice} className={styles.inputRange} onChange={(e) => {
              setMinPrice(e.target.value)
            }} placeholder='Min' type='number' />
            <input value={maxPrice} className={styles.inputRange} onChange={(e) => {
              setMaxPrice(e.target.value)
            }} placeholder='Max' type='number' />
            {/* <button className={styles.btnRange}>Filtrar</button> */}
          </div>
        </div>
      </aside>
      {data?.length === 0 ? (
        <section>
          <h2>Nenhum produto encontrado, tente alterar os filtros...</h2>
        </section>
      ) : null}
      {data?.length > 0 ? (
        <section>
          <h2>Lista de Produtos</h2>
          <List data={data} />
        </section>
      ) : null}

    </div>
  )
}