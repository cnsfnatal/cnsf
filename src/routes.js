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
      <Route path="/" exact component={Início} />
      <Route path="/noticiais" component={Notíciais} />
      <Route path="/contato" component={Contato} />
      <Route path="/esportes" component={Esportes} />
      <Route path="/dança" component={Dança} />
      <Route path="/ballet" component={Ballet} />
      <Route path="/pastoral" component={Pastoral} />
      <Route path="/galeria" component={Galeria} />
      <Route path="/metologia" component={Metologia} />
      <Route path="/fundação" component={Fundação} />
      <Route path="/estrutura" component={Estrutura} />
    </Switch>
  );
}

export default Routes;
