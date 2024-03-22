import { Provider } from 'react-redux'
import './App.css'
import ReduxWithThunkExample from './components/Statemanagement/Redux/ReduxWithThunkExample'
// import RefactoredRouter from './components/EComm-FakeStoreAPI/CodeRefactored/RefactoredRouter'
// import ExampleComponent from './components/Statemanagement/Redux/ExampleComponent'
// import RoutingExample2 from './components/EComm-FakeStoreAPI/RoutingExample2'
// import TasksComponent from './components/CRUD TASKS'
import TodoListComponent from './components/ToDoList/TodoListComponent'
// import RoutingExample3 from './components/EComm-FakeStoreAPI/RoutingExample3'
// import RoutingExample4 from './components/EComm-FakeStoreAPI/RoutingExample4'
// import Routing from './components/EComm-FakeStoreAPI/Routings'
import AppRoutes from './Routes/AppRoutes'
import store from './components/Statemanagement/Redux/store'
// import CounterComponentWithUseReducer from './components/ContextApiWithUseReducer/CounterExample/CounterComponentWithUseReducer'
// import PLPpage from './components/EComm/PLPpage'
// import ResizeAwareComponent from './components/resizeWindow/ResizeAwareComponent'

function App() {

  return (
    <>
      {/* <AppRoutes/> */}
      {/* <PLPpage/> */}
        {/* <CounterComponentWithUseReducer/> */}
       {/* <ResizeAwareComponent/> */}
       {/* <RoutingExample2/> */}
       {/* <RoutingExample3/> */}
       {/* <RoutingExample4/> */}
       {/* <RefactoredRouter/> */}
       {/* <ExampleComponent/> */}
       {/* <TasksComponent/> */}
       {/* <TodoListComponent/> */}
       <Provider store={store}>
       <ReduxWithThunkExample/>  
       </Provider>

    </>
  )
}

export default App
