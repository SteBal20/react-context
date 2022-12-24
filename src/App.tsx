import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Sushi from "./components/Sushi/Sushi";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Sushi />
      </main>
    </Fragment>
  );
}

export default App;
