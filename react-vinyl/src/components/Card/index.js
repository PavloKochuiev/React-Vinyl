import React from "react";
import styles from "./Card.module.scss";

function Card({id, price, imageUrl, onFavorite, title, onPlus, favorited = false }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({ id, price, imageUrl, title });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({ id, price, imageUrl, title });
        setIsFavorite(!isFavorite);
    };

    React.useEffect(() => {}, [isAdded]);

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img
                    src={
                        isFavorite
                            ? "/img/favorite_liked.png"
                            : "/img/favorite_unliked.svg"
                    }
                    alt="unliked"
                />
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
