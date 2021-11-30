import './style/App.scss';
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Nav from "./components/Nav/Nav";
import {BrowserRouter} from "react-router-dom";
import Content from "./components/Content/Content";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Search/>
                <Nav/>
                {/*<Content/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
