import './style/App.scss';
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Nav from "./components/Nav/Nav";

function App() {
    return (
        <div className="App">
            <Header/>
            <Search/>
            <Nav/>
        </div>
    );
}

export default App;
