import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/slices/itemSlice'

export const AddItem = () => {
  const { items } = useSelector((store) => store.itemsInStore)
  const dispatch = useDispatch()
  const [itemName, setItemName] = useState('')

  const changeNameItem = (event) => {
    const { value } = event.target
    setItemName(value)
  }

  const handleAddItem = (event) => {
    event.preventDefault()
    if (itemName) {
      const nextId = generateId()
      dispatch(addItem({ id: nextId, name: itemName }))
      setItemName('')
    } else {
      alert('item name must not empty! Please try again.')
      return
    }
  }

  const generateId = () => {
    let maxId = 0
    for (const item of items) {
      if (item.id > maxId) {
        maxId = item.id
      }
    }
    return maxId + 1
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <form id="form-add-item" onSubmit={handleAddItem}>
        <input type="text" value={itemName} onChange={changeNameItem} />
      </form>
      <button type="submit" form="form-add-item" style={{ cursor: 'pointer' }}>
        add
      </button>
    </div>
  )
}
