import React from "react";
import { BrowserRouter as Route} from "react-router-dom";
import Wrapper from "./components/Wrapper"
import Books from "./pages/Books";
import Saved from "./pages/Saved";

import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Wrapper>
          <Route exact path="/" component={Books} />
          <Route exact path="/saved" component={Saved} />
        </Wrapper>
        <Books />

    </div>
  );
}

export default App;
