import "./App.css";
import Header from "./components/header/Header";
import { AppRoutes } from "./router/routes";

function App() {
    return (
        <>
            <Header />
            <div className="content-block">
                <AppRoutes />
            </div>
        </>
    );
}

export default App;
