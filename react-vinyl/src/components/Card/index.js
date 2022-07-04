import React from "react";
import styles from "./Card.module.scss";

function Card({ price, imageUrl, onFavorite, title, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({price, imageUrl, title});
        setIsAdded(!isAdded);
    };

    React.useEffect(() => {
        
    }, [isAdded])

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/favorite_unliked.svg" alt="unliked" />
            </div>
            <img width={170} height={170} src={imageUrl} alt="cover" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>{price}$</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"}
                    alt="add"
                ></img>
            </div>
        </div>
    );
}

export default Card;
