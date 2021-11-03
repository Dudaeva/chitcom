import Router from "./routes";
import {SnackbarProvider} from "notistack";

const App = () => {

    return (
        <SnackbarProvider maxSnack={3}>
            <Router />
        </SnackbarProvider>
    );
}

export default App;