import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';
import { theme } from './Theme';


// Components
import Routes from './routes';
import Header from './components/header/index';

function App() {
        return (
            <ThemeProvider theme={theme}>
                <>
                <GlobalStyles />
                    <BrowserRouter>

                        <Header />

                        <Routes />
                        
                    </BrowserRouter>                    
                </>
            </ThemeProvider>
        )
    
}

export default App;