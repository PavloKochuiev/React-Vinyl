import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch("https://62c30de5ff594c65676cd37e.mockapi.io/items").then((response) => {
            return response.json();
        }).then((json) => {
            setItems(json);
        })
    })

    const onAddToCart = (obj) => {
        alert(obj)
    }

    return (
        <div className="wrapper clear">
            {cartOpened ? (
                <Drawer
                    items={cartItems}
                    onClose={() => setCartOpened(false)}
                />
            ) : null}
            <Header onClickCart={() => setCartOpened(true)} />
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
                <div className="d-flex flex-wrap">
                    {items.map((item) => (
                        <Card
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onFavorite={() => console.log(item)}
                            onPlus={(obj) => onAddToCart(obj)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;