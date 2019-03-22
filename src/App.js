import React, { Component } from 'react';
import './styles/App.scss';
import Header from './components/Header'
import Amadeus from 'amadeus'
import Root from './router/Root'
import {} from 'dotenv/config'

const  amadeus = new Amadeus({
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET
});
export const AmadeusContext = React.createContext()

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <AmadeusContext.Provider value={amadeus}>
          <Root/>
        </AmadeusContext.Provider>
      </div>
    );
  }
}

export default App;
