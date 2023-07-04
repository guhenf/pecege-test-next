import Card from "./Card"

export default function List({ data }) {
  return (
    <ul>
      {
        data.map(item => <Card key={item.id} item={item} />)
      }
    </ul>
  )
}

