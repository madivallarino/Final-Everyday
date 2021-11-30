import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Signin from "./Signin";
import NavBar from "./NavBar";
import Footer from "./Footer";
const UnauthorizedApp = ({onLogin}) => {


    return (
        <div>
        <NavBar />
        <Switch>
        <Route path='/signin'>
        <Signin onLogin={onLogin}/>
        </Route>
        <Route exact path="/">
            <LandingPage /> 
        </Route>
        </Switch>
        <Footer />
    </div>
    )
}

export default UnauthorizedApp;