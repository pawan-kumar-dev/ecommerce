import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Cart, OrderConfirmed, ProductDetail, Home } from "./pages";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/order-placed" component={OrderConfirmed} />
          <Route path="/checkout" component={Cart} />
          <Route path="/product-detail/:productId" component={ProductDetail} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
