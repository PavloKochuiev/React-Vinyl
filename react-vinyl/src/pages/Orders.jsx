import axios from "axios";
import React from "react";
import Card from "../components/Card";

function Orders() {
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`https://62c30de5ff594c65676cd37e.mockapi.io/orders`);
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>My collection</h1>
            </div>

            <div className="d-flex flex-wrap">
                {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                    <Card key={index} loading={isLoading} {...item} />
                ))}
            </div>
        </div>
    );
}

export default Orders;
