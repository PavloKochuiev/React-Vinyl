import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    return (
        <div className="wrapper clear">
            <Drawer />
            <Header />

            <div className="content p-40">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>All vinyls</h1>
                    <div className="search-block d-flex align-center">
                        <img
                            width={25}
                            height={25}
                            src="/img/search.png"
                            alt="search"
                        ></img>
                        <input placeholder="Search..." />
                    </div>
                </div>
                <div className="d-flex ">
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default App;
