import React from "react";
import { Switch, Route } from "react-router-dom";

import Início from "./pages/início/index";
import Notíciais from "./pages/Notíciais/index.js";
import Contato from "./pages/Contato/index";
import Esportes from "./pages/Esportes/index";
import Metologia from "./pages/metologia/index";
import Fundação from "./pages/Fundação/index";
import Estrutura from "./pages/Estrutura/index";
import Galeria from "./pages/Galeria/index";
import Dança from "./pages/Dança/index";
import Ballet from "./pages/Ballet/index";
import Pastoral from "./pages/Pastoral/index";

function Routes() {
  return (
    <Switch>
      <Route path="/cnsf" exact component={Início} />
      <Route path="/cnsf/noticiais" component={Notíciais} />
      <Route path="/cnsf/contato" component={Contato} />
      <Route path="/cnsf/esportes" component={Esportes} />
      <Route path="/cnsf/dança" component={Dança} />
      <Route path="/cnsf/ballet" component={Ballet} />
      <Route path="/cnsf/pastoral" component={Pastoral} />
      <Route path="/cnsf/galeria" component={Galeria} />
      <Route path="/cnsf/metologia" component={Metologia} />
      <Route path="/cnsf/fundação" component={Fundação} />
      <Route path="/cnsf/estrutura" component={Estrutura} />
    </Switch>
  );
}

export default Routes;
