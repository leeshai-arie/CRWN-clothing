import { Route, Routes, } from "react-router-dom";

import Navigation from "../navigation/navigation.component";
import Home from "../home/home.component";
import Authentication from "../authentication/authentication.component";
import Shop from "../shop/shop.component";
import Checkout from "../checkout/checkout.component";

const SiteRouter = () => {
  return (
    <Routes>
      <Route path="/" element ={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default SiteRouter;