import React from "react";
import Header from "./components/Header";
import axios from "axios";
import Drawer from "./components/Drawer";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    const [favoriteItems, setFavoriteItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const [cartResponse, favoriteItemsResponse, itemsResponse] = await Promise.all([
                    axios.get("https://62c30de5ff594c65676cd37e.mockapi.io/cart"),
                    axios.get("https://62c30de5ff594c65676cd37e.mockapi.io/favorite"),
                    axios.get("https://62c30de5ff594c65676cd37e.mockapi.io/items"),
                ]);

                setIsLoading(false);
                setCartItems(cartResponse.data);
                setFavoriteItems(favoriteItemsResponse.data);
                setItems(itemsResponse.data);
            } catch (error) {
                console.log("Error from PromiseAll");
            }
        }

        fetchData();
    }, []);

    const onAddToCart = async (obj) => {
        const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
        try {
            if (findItem) {
                setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
                await axios.delete(`https://62c30de5ff594c65676cd37e.mockapi.io/cart/${findItem.id}`);
            } else {
                setCartItems((prev) => [...prev, obj]);
                const { data } = await axios.post("https://62c30de5ff594c65676cd37e.mockapi.io/cart", obj);
                setCartItems((prev) =>
                    prev.map((item) => {
                        if (item.parentId === data.parentId) {
                            return {
                                ...item,
                                id: data.id,
                            };
                        }
                        return item;
                    })
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onRemoveItem = (id) => {
        try {
            axios.delete(`https://62c30de5ff594c65676cd37e.mockapi.io/cart/${id}`);
            setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
        } catch (error) {
            console.error(error);
        }
    };

    const onAddToFavorites = async (obj) => {
        try {
            if (favoriteItems.find((favObj) => Number(favObj.id) === Number(obj.id))) {
                axios.delete(`https://62c30de5ff594c65676cd37e.mockapi.io/favorite/${obj.id}`);
                setFavoriteItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
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

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value);
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id));
    };

    return (
        <AppContext.Provider
            value={{
                items,
                cartItems,
                favoriteItems,
                isItemAdded,
                onAddToFavorites,
                onAddToCart,
                setCartOpened,
                setCartItems,
            }}
        >
            <div className="wrapper clear">
                <div>
                    <Drawer
                        items={cartItems}
                        onClose={() => setCartOpened(false)}
                        onRemove={onRemoveItem}
                        opened={cartOpened}
                    />
                </div>

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
                        isLoading={isLoading}
                    />
                </Route>

                <Route path="/favorites" exact>
                    <Favorites />
                </Route>

                <Route path="/orders" exact>
                    <Orders />
                </Route>
            </div>
        </AppContext.Provider>
    );
}

export default App;
