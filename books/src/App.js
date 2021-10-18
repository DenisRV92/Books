import './style/App.scss';
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Nav from "./components/Nav/Nav";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Search/>
                <Nav/>
            </div>
        </BrowserRouter>
    );
}

export default App;
