import {Routes,Route} from 'react-router'
import Login from '../Components/Login'
import Register from '../Components/Register'
import About from '../Components/About'
import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import Store from '../Components/Store'
import DetailedProduct from '../Components/DetailedProduct'
import Cart from '../Components/Cart'
const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={'/navbar'} element={<Navbar/>}>
        <Route path={'/navbar/home'} element ={<Home/>}/>
        <Route path={'/navbar/about'} element ={<About/>}/>
        <Route path={'/navbar/store'} element ={<Store/>}/>
        <Route path={'/navbar/product/:id'} element={<DetailedProduct/>}/>
        <Route path={'/navbar/checkout'} element = {<Cart/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoute
