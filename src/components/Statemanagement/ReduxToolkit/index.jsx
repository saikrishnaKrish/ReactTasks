
import { Provider } from 'react-redux'
import store from './Store/store'
import Counter from './Counter'
import Todo from './Todo'

const ToolkitExample = () => {
    

  return (
    <div>
        <Provider store={store}>
        <h1>Toolkit Example</h1>
        <Counter/>
        <Todo/>
        </Provider>
    </div>
  )
}

export default ToolkitExample