import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Início from './pages/início/index';
import Colégio from './pages/Colégio/index';
import Notíciais from './pages/Notíciais/index.js';
import Contato from './pages/Contato/index';
import Serviços from './pages/Serviços/index'


function Routes() {
    return(
        <Switch>
            <Route path="/cnsf" exact component={Início} />
            <Route path="/colégio" component={Colégio} />
            <Route path="/noticias" component={Notíciais} />
            <Route path="/contato" component={Contato} />
            <Route path="/serviços" component={Serviços} />
        </Switch>
    )
}

export default Routes;