import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Page404 from "./components/Page404";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Container fluid className="p-0">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Page404} />
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}
export default App;
