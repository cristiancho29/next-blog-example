import { ReactElement } from "react";
import "../styles/global.css";
const App = ({Component, pageProps}):ReactElement => {
  return <Component {...pageProps}/>;
};

export default App;