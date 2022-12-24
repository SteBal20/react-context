import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Sushi from "./components/Sushi/Sushi";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Sushi />
      </main>
    </Fragment>
  );
}

export default App;
