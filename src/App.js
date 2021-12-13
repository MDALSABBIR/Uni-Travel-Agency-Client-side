
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound'
import Footer from './Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Login from './Login/Login';
import Home from './Pages/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import AllOrders from './Pages/AllOrders/AllOrders';
import MyOrders from './Pages/MyOrders/MyOrders';
import ServicesDetails from './Pages/ServiceDetails.js/ServicesDetails';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/servicesDetails/:eventsDeta">
              <ServicesDetails></ServicesDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/allOrders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/contactUs">
              <ContactUs></ContactUs>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
