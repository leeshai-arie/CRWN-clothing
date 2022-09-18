import { Route, Routes, } from 'react-router-dom';

import Navigation from '../navigation/navigation.component';
import Home from '../home/home.component';
import SignIn from '../sign-in/sign-in.component';

const Shop = () => {
  return <h1>I am Shop</h1>;
};

const SiteRouter = () => {
  return (
    <Routes>
      <Route path='/' element ={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='sign-in' element={<SignIn />}/>
      </Route>
    </Routes>
  );
};

export default SiteRouter;