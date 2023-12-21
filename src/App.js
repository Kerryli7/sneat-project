
import './App.css';
import MiniDrawer from './Components/Material UI/MiniDrawer';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Components/Routers/Routers';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <MiniDrawer/>
           <Routers></Routers>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
