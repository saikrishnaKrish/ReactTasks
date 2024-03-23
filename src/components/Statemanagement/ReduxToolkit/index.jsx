
import { Provider } from 'react-redux'
import store from './Store/store'
import Counter from './Counter'
import Todo from './Todo'
import UserExample from './ReduxWtihAsyncThunkExample'

const ToolkitExample = () => {
      

  return (
    <div>
        <Provider store={store}>
        <h1>Toolkit Example</h1>
        <Counter/>
        <Todo/>
        <UserExample/>
        </Provider>
    </div>
  )
}

export default ToolkitExample