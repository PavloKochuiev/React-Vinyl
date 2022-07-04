import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import axios from "axios";
import Drawer from "./components/Drawer";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");

    React.useEffect(() => {
        axios
            .get("https://62c30de5ff594c65676cd37e.mockapi.io/items")
            .then((response) => {
                setItems(response.data);
            });
        axios
            .get("https://62c30de5ff594c65676cd37e.mockapi.io/cart")
            .then((response) => {
                setCartItems(response.data);
            });
    });

    const onAddToCart = (obj) => {
        axios.post("https://62c30de5ff594c65676cd37e.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onRemoveItem = (id) => {
        // axios.delete(`https://62c30de5ff594c65676cd37e.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter(item => item.id !== id));
    };

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className="wrapper clear">
            {cartOpened ? (
                <Drawer
                    items={cartItems}
                    onClose={() => setCartOpened(false)}
                    onRemove={onRemoveItem} 
                />
            ) : null}
            <Header onClickCart={() => setCartOpened(true)} />
            <div className="content p-40">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>
                        {searchValue
                            ? `Search on: "${searchValue}"`
                            : `All Vinyls`}
                    </h1>
                    <div className="search-block d-flex align-center">
                        <img
                            width={25}
                            height={25}
                            src="/img/search.png"
                            alt="search"
                        ></img>
                        {searchValue && (
                            <img
                                onClick={() => setSearchValue("")}
                                className="clear cu-p"
                                src="/img/btn-remove.svg"
                                alt="Clear"
                            />
                        )}
                        <input
                            onChange={onChangeSearchInput}
                            value={searchValue}
                            placeholder="Search..."
                        />
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {items
                        .filter((item) =>
                            item.title
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                        )
                        .map((item, index) => (
                            <Card
                                index={item.title}
                                title={item.title}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                onFavorite={() => console.log(item)}
                                onPlus={(obj) => onAddToCart(item)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
