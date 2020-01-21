import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Header from './components/header/index';
import Footer from './components/footer/index';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>

                    <Header />

                    <Routes />

                    
                    
                </BrowserRouter>                    
            </div>
        )
    }
}

export default App;