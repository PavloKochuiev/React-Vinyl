function Drawer({onClose, onRemove, items = []}) {
    return (
        <div className="overlay">
            <div className="drawer">
                <div className="overflow">
                    <h2 className="d-flex justify-between mb-30">
                        Cart
                        <img
                            className="removeBtn cu-p"
                            src="/img/btn-remove.svg"
                            alt="Close"
                            onClick={onClose}
                        />
                    </h2>

                    {items.length > 0 ? (
                        <div>
                            <div className="items">
                                {items.map((obj) => (
                                    <div className="cartItem d-flex align-center mb-20">
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
                                <button className="greenButton">
                                    Checkout{" "}
                                    <img src="/img/arrow.svg" alt="arrow" />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="cartEmpty d-flex align-center justify-content flex-column flex">
                            <img
                                className="mb-20"
                                width={120}
                                height={120}
                                src="img/empty-cart.jpeg"
                                alt="empty cart"
                            />
                            <h2>Cart is empty</h2>
                            <p className="opacity-6">
                                Add at least one vinyl to order
                            </p>
                            <button onClick={onClose} className="greenButton">Return back</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Drawer;
