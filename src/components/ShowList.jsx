import { useSelector } from 'react-redux'
import { Item } from './Item'

export const ShowList = () => {
  const store = useSelector((store) => store)
  console.log('store---', store)

  return (
    <div>
      {store.itemsInStore.items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}
