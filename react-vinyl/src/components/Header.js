function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt="logo" />
                <div>
                    <h3 className="text-uppercase">React Vinyl</h3>
                    <p className="opacity-5">your future collection</p>
                </div>
            </div>
            <div>
                <ul className="d-flex">
                    <li onClick={props.onClickCart} className="mr-30 cu-p">
                        <img
                            width={24}
                            height={24}
                            src="/img/shopping-cart.png"
                            alt="cart"
                        />
                        <span>47$</span>
                    </li>
                    <li>
                        <img
                            width={24}
                            height={24}
                            src="/img/user.png"
                            alt="user"
                        />
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
