import Searchbar from "./components/bannerSearch";
import axios from "axios";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import bannerCoupon from "./assets/Banner.png";
import Home from "./Pages/Home";
import user from "./assets/user.png";
import Footer from "./components/footer";
import ProductDetail from "./Pages/ProductDetail";
import Card from "./components/card";
import { useEffect } from "react";
import Catalog from "./Pages/Catalog";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Searchbar />
        </div>
        <Switch>
          <Route path="/product/:id">
            <ProductDetail />
          </Route>
          <Route path="/catalog">
            <div className="flex text-neutral justify-between">
              <Sidebar />

              <Catalog />
            </div>
          </Route>
          <Route path="/">
            <div className="flex text-neutral justify-between">
              <Sidebar />
              <Home />
              {/* <Catalog /> */}
            </div>
            <div className="my-5 mx-10">
              <img src={bannerCoupon} />
            </div>
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
