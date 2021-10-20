import Counter from "./views/counter/Counter";
import TodoList from "./views/todo/Todo";
import Shop from "./components/shop/Shop";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Product from "./components/product/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
    <Router>
        <Navbar />
      <div className="App">
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Counter} path="/count" />
          <Route component={Shop} path="/shop" exact />
          <Route component={Product} path="/shop/:id" />
          <Route component={TodoList} path="/todo" />
        </Switch>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
