import React from "react";
import AppContext from "../context";

const Info = ({ image, title, description }) => {
    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div className="cartEmpty d-flex align-center justify-content flex-column flex">
            <img className="mb-20" width={120} src={image} alt={image} />
            <h2>{title}</h2>
            <p className="opacity-6 align-center">{description}</p>
            <button onClick={() => setCartOpened(false)} className="greenButton">
                Return back
            </button>
        </div>
    );
};

export default Info;
