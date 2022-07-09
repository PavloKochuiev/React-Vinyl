import React from "react";

function Delivery() {
    return (
        <div className="cartEmpty d-flex align-center justify-content flex-column flex mt-50">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Delivery</h1>
            </div>
            <h2 className="mb-50">Delivery is carried out by international mail.</h2>
            <p className="opacity-6 align-center mb-50">
                All orders are sent after prepayment. Delivery usually takes 1-2 weeks.
            </p>
        </div>
    );
}

export default Delivery;
