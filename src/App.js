import './App.css';
//import Body from './Body';
import {RouterProvider} from 'react-router-dom'
import {appRouter} from './Body'
import { Provider } from 'react-redux';
import appStore from './Utilis.js/appStore';

function App() {
  return (
    <div >
      <Provider store={appStore}>
      <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
