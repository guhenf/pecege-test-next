export default function Card({ item }) {

  let price = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(item.price)
  let condition = item.condition === 'new' ? 'Novo' : 'Usado'

  return (
    <li key={item.id}>
      <b>Preço: {price}</b>
      <img src={item.image} alt='Imagem do Produto' />
      <div>
        <p>Marca: {item.brand}</p>
        <p>Modelo: {item.model}</p>
        <p>Condicao: {condition}</p>
      </div>
    </li>
  )
}

