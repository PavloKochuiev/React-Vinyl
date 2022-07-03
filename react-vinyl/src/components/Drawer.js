function Drawer() {
    return (
        <div style={{ display: "none" }} className="overlay">
            <div className="drawer">
                <div>
                    <h2 className="d-flex justify-between mb-30">
                        Cart
                        <img
                            className="removeBtn  cu-p"
                            src="/img/btn-remove.svg"
                            alt="remove"
                        />
                    </h2>

                    <div className="items">
                        <div className="cartItem d-flex align-center mb-20">
                            <img
                                className="mr-20"
                                width={80}
                                height={80}
                                src="/img/covers/blaze-dancehall.jpg"
                                alt="blaze-dancehall"
                            ></img>
                            <div className="mr-20">
                                <p className="mb-5">Blaze - Dancehall</p>
                                <b>30$</b>
                            </div>
                            <img
                                className="removeBtn"
                                src="/img/btn-remove.svg"
                                alt="remove"
                            />
                        </div>
                        <div className="cartItem d-flex align-center mb-20">
                            <img
                                className="mr-20"
                                width={80}
                                height={80}
                                src="/img/covers/blaze-dancehall.jpg"
                                alt="blaze-dancehall"
                            ></img>
                            <div className="mr-20">
                                <p className="mb-5">Blaze - Dancehall</p>
                                <b>30$</b>
                            </div>
                            <img
                                className="removeBtn"
                                src="/img/btn-remove.svg"
                                alt="remove"
                            />
                        </div>
                    </div>
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
                        Checkout <img src="/img/arrow.svg" alt="arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
