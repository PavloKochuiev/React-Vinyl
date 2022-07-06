import React from "react";
import Header from "./components/Header";
import axios from "axios";
import Drawer from "./components/Drawer";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    const [favoriteItems, setFavoriteItems] = React.useState([]);

    React.useEffect(() => {
        async function fetchData(response) {
            const cartResponse = await axios.get(
                "https://62c30de5ff594c65676cd37e.mockapi.io/cart"
            );
            const favoriteItemsResponse = await axios.get(
                "https://62c30de5ff594c65676cd37e.mockapi.io/favorite"
            );
            const itemsResponse = await axios.get(
                "https://62c30de5ff594c65676cd37e.mockapi.io/items"
            );

            setCartItems(cartResponse.data);
            setFavoriteItems(favoriteItemsResponse.data);
            setItems(itemsResponse.data);
        }

        fetchData();
    }, []);

    const onAddToCart = (obj) => {
        if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
            axios.delete(
                `https://62c30de5ff594c65676cd37e.mockapi.io/cart/${obj.id}`
            );
            setCartItems((prev) =>
                prev.filter((item) => Number(item.id) !== Number(obj.id))
            );
        } else {
            axios.post("https://62c30de5ff594c65676cd37e.mockapi.io/cart", obj);
            setCartItems((prev) => [...prev, obj]);
        }
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://62c30de5ff594c65676cd37e.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value);
        console.log(e.target.value);
    };

    const onAddToFavorites = async (obj) => {
        try {
            if (favoriteItems.find((favObj) => favObj.id === obj.id)) {
                axios.delete(
                    `https://62c30de5ff594c65676cd37e.mockapi.io/favorite/${obj.id}`
                );
            } else {
                const { data } = await axios.post(
                    "https://62c30de5ff594c65676cd37e.mockapi.io/favorite",
                    obj
                );
                setFavoriteItems((prev) => [...prev, data]);
            }
        } catch (error) {
            console.error("Can't add to favorites");
        }
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

            <Route path="/" exact>
                <Home
                    items={items}
                    cartItems={cartItems}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onAddToFavorites={onAddToFavorites}
                    onAddToCart={onAddToCart}
                />
            </Route>

            <Route path="/favorites" exact>
                <Favorites
                    items={favoriteItems}
                    onAddToFavorites={onAddToFavorites}
                />
            </Route>
        </div>
    );
}

export default App;
