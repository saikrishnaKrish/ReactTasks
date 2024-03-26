import { Provider } from 'react-redux'
import './App.css'

// import RefactoredRouter from './components/EComm-FakeStoreAPI/CodeRefactored/RefactoredRouter'
// import ExampleComponent from './components/Statemanagement/Redux/ExampleComponent'
// import RoutingExample2 from './components/EComm-FakeStoreAPI/RoutingExample2'
// import TasksComponent from './components/CRUD TASKS'
import TodoListComponent from './components/ToDoList/TodoListComponent'
// import RoutingExample3 from './components/EComm-FakeStoreAPI/RoutingExample3'
// import RoutingExample4 from './components/EComm-FakeStoreAPI/RoutingExample4'
// import Routing from './components/EComm-FakeStoreAPI/Routings'
import AppRoutes from './Routes/AppRoutes'
import ToolkitExample from './components/Statemanagement/ReduxToolkit'
import ReduxWithThunkExample from './components/Statemanagement/Redux'
import LazyLoading from './components/LazyLoading'
// import CounterComponentWithUseReducer from './components/ContextApiWithUseReducer/CounterExample/CounterComponentWithUseReducer'
// import PLPpage from './components/EComm/PLPpage'
// import ResizeAwareComponent from './components/resizeWindow/ResizeAwareComponent'

function App() {

  return (
    <>
      hi
      <AppRoutes/>
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
       {/* <ReduxWithThunkExample/> */}
        {/* <ToolkitExample/> */}
    {/* <LazyLoading/> */}
    </>
  )
}

export default App
