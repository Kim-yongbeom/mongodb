import NavbarContainer from "./containers/common/navbar/NavbarContainer";
import MainContainer from "./containers/common/main/MainContainer";
import GlobalStyles from "./GlobalStyles";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { useState, useEffect } from "react/cjs/react.development";
import Write from "./pages/Write";
function App() {
  const [isLoggined, setIsLoggined] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (accessToken) {
      setIsLoggined(true);
    } else {
      setIsLoggined(false);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <NavbarContainer isLoggined={isLoggined} setIsLoggined={setIsLoggined} />
      <MainContainer />
      <Route path="/" exact={true} component={Home} />
      <Route
        path="/signin"
        exact={true}
        component={() => <Signin setIsLoggined={setIsLoggined} />}
      />
      <Route path="/signup" exact={true} component={Signup} />
      <Route path="/write" exact={true} component={Write} />
    </>
  );
}

export default App;
