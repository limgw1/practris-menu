import {Routes, Route, Outlet} from 'react-router-dom'
import Home from "./routes/home/home.component";
import Navbar from './components/navigation/navbar.component';
import Authentication from './components/authentication/authentication.component';
import BaseGameBoard from './components/game-components/base-game-board.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkouts/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='/auth' element={<Authentication/>}/>
        <Route path='/game' element={<BaseGameBoard/>}/>
        <Route path='/shop/*' element={<Shop/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App;
