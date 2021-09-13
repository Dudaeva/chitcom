import {Redirect, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import authorizedList from "./authorized";
import unauthorizedList from "./unauthorized";

const Router = () => {
    const {isSignedIn} = useSelector(store => store.auth);

    return (
        <>
            <Switch>
                { isSignedIn ?
                    authorizedList.map(page =>
                        <Route
                            component={page.component}
                            path={page.path}
                            key={page.path}
                            exact={page.exact}
                        />
                    )
                :
                    unauthorizedList.map(page =>
                        <Route
                            key={page.path}
                            path={page.path}
                            component={page.component}
                            exact={page.exact}
                        />
                    )
                }
                <Redirect to="/" />
            </Switch>
        </>
    )
}

export default Router;