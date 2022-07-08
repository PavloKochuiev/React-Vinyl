import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Header(props) {
    const { totalPrice } = useCart();

    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center">
                    <img width={40} height={40} src="/img/logo.png" alt="logo" />
                    <div>
                        <h3 className="text-uppercase">React Vinyl</h3>
                        <p className="opacity-5">your future collection</p>
                    </div>
                </div>
            </Link>
            <div>
                <ul className="d-flex">
                    <li onClick={props.onClickCart} className="mr-30 cu-p positioned">
                        <img width={24} height={24} src="/img/shopping-cart.png" alt="cart" />
                        <span className="totalPrice">{totalPrice}$</span>
                    </li>
                    <li className="ml-20">
                        <Link to="/favorites">
                            <img className="mr-15 cu-p" width={24} height={24} src="/img/favorite.png" alt="favorite" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/orders">
                            <img className="mr-15 cu-p" width={24} height={24} src="/img/user.png" alt="user" />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
