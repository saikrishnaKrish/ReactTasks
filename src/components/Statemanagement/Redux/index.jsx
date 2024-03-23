
import { Provider } from 'react-redux'
import ReduxCounter from './ReduxWithThunkExample'
import store from './Store/store'

const ReduxWithThunkExample = () => {
  return (
    <div>
        <Provider store={store}>
        Redux With Thunk Example
        <ReduxCounter/>
        </Provider>
    </div>
  )
}

export default ReduxWithThunkExample