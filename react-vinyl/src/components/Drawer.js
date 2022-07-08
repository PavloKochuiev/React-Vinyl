import React from "react";
import AppContext from "../context";
import Info from "./Info";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
    const { cartItems, setCartItems } = React.useContext(AppContext);
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post(`https://62c30de5ff594c65676cd37e.mockapi.io/orders`, {
                items: cartItems,
            });
            
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`https://62c30de5ff594c65676cd37e.mockapi.io/cart` + item.id);
                await delay(1000);
            }
        } catch (error) {
            console.log("Can't create order!");
        }
        setIsLoading(false);
    };

    return (
        <div className="overlay">
            <div className="drawer">
                <div className="overflow">
                    <h2 className="d-flex justify-between mb-30">
                        Cart
                        <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close" onClick={onClose} />
                    </h2>

                    {items.length > 0 ? (
                        <div className="d-flex flex-column flex">
                            <div className="items">
                                {items.map((obj) => (
                                    <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                        <img
                                            className="mr-20"
                                            width={80}
                                            height={80}
                                            src={obj.imageUrl}
                                            alt={obj.title}
                                        ></img>
                                        <div className="mr-20">
                                            <p className="mb-5">{obj.title}</p>
                                            <b>{obj.price}$</b>
                                        </div>
                                        <img
                                            className="removeBtn"
                                            src="/img/btn-remove.svg"
                                            alt="remove"
                                            onClick={() => onRemove(obj.id)}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="cartTotalBlock">
                                <ul>
                                    <li className="d-flex">
                                        <span>Total:</span>
                                        <div></div>
                                        <b>60$</b>
                                    </li>
                                    <li className="d-flex">
                                        <span>Shipping:</span>
                                        <div></div>
                                        <b>10$</b>
                                    </li>
                                </ul>
                                <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                                    Checkout <img src="/img/arrow.svg" alt="arrow" />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Info
                            title={isOrderComplete ? `Successfully! Order #${orderId}` : "Cart is empty"}
                            description={
                                isOrderComplete ? "We will contact you shortly" : "You need to add at least one vinyl"
                            }
                            image={isOrderComplete ? "/img/complete-order.jpeg" : "/img/empty-cart.jpeg"}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Drawer;
