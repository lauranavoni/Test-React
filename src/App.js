import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "../src/components/Pages/Movies/Movies";
import Trending from "./components/Pages/Trending/Trending";
import Search from "./components/Pages/Search/Search";
import { Container } from "@material-ui/core";



function App() {
  return (
    <BrowserRouter>
    
      <Header />
     
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;