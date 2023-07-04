export default function Card({ item }) {

  let price = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(item.price)

  return (
    <li key={item.id}>
      <b>Preço: {price}</b>
      <img src={item.image} alt='Imagem do Produto' />
      <div>
        <p>Marca: {item.brand}</p>
        <p>Modelo: {item.model}</p>
        <p>Visto por {item.views} pessoas</p>
      </div>
    </li>
  )
}

