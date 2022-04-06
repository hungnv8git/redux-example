import { useDispatch } from 'react-redux'
import { removeItem } from '../redux/slices/itemSlice'

export const Item = ({ item }) => {
  const dispatch = useDispatch()

  const handleRemoveItem = () => {
    dispatch(removeItem(item.id))
  }
  return (
    <div
      key={item.id}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '6px'
      }}
    >
      <span>
        #{item.id}. {item.name}
      </span>
      <button
        style={{ backgroundColor: 'red', cursor: 'pointer' }}
        onClick={handleRemoveItem}
      >
        x
      </button>
    </div>
  )
}
