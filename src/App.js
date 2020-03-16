import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Menu from './containers/Menu';
import Map from './containers/Map';
import Recommendations from './pages/Recommendations';
import Footer from './components/Footer';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <Menu>
            <Map />
            <Switch>
              <Route exact path="/" component={Recommendations} />
              <Route exact path="/about" component={Recommendations} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </Menu>
          <Footer />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
