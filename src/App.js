import './style/App.scss';
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import {HashRouter} from "react-router-dom";


function App() {
    return (
        <HashRouter>
            <div className="App">
                <Header/>
                <Search/>
            </div>
        </HashRouter>
    );
}

export default App;
