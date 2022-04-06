import { Provider } from 'react-redux'
import { AddItem } from './components/AddItem'
import { ShowList } from './components/ShowList'
import { store } from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ margin: 'auto', marginTop: '40px', width: '250px' }}>
        <AddItem />
        <ShowList />
      </div>
    </Provider>
  )
}

export default App
