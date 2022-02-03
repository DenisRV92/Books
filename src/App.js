import './style/App.scss';
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Content from "./components/Content/Content";


function App() {
    return (
        <BrowserRouter>
            {/*<Switch>*/}
                <div className="App">
                    <Header/>
                    <Search/>
                    {/*<Route path="/" component={App}/>*/}
                    {/*<Nav/>*/}
                    {/*<Content/>*/}
                </div>
            {/*</Switch>*/}
        </BrowserRouter>
    );
}

export default App;
