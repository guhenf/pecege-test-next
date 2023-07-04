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

  const [params, setParams] = useState('')
  const [filterType, setFilterType] = useState('')

  const { data, error } = useSWR(
    `/api/staticdata?${filterType}=${params}`,
    fetcher
  )
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className={styles.content}>
      <aside>
        <div className={styles.search}>
          <input className={styles.searchInput} placeholder='Buscar produtos...' />
          <MagnifyingGlass />
        </div>
        <div className={styles.priceBox}>
          <p className={styles.priceText}>Filtro e Ordenagem por Precos</p>
          <div className={styles.sorts}>
            <SortUp
              onClick={() => {
                setFilterType('sort')
                setParams('high-to-low')
              }}
            />
            <RotateLeft
              className={styles.rotateLeft}
              onClick={() => {
                setFilterType('')
                setParams('')
              }}
            />
            <SortDown
              onClick={() => {
                setFilterType('sort')
                setParams('low-to-high')
              }}
            />
          </div>
          <div className={styles.ranges}>
            <input className={styles.inputRange} placeholder='Max' type='number' />
            <input className={styles.inputRange} placeholder='Min' type='number' />
            <button className={styles.btnRange}>Filtrar</button>
          </div>
        </div>
      </aside>
      {data.length === 0 ? (
        <section>
          <h2>Nenhum produto encontrado, tente alterar os filtros...</h2>
        </section>
      ) : (
        <section>
          <h2>Lista de Produtos</h2>
          <List data={data} />
        </section>
      )}
    </div>
  )
}