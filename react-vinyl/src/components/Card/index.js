import React from "react";
import ContentLoader from "react-content-loader";

import AppContext from "../../context";

import styles from "./Card.module.scss";

function Card({
    id,
    title,
    imageUrl,
    price,
    onFavorite,
    onPlus,
    favorited = false,
    loading = false,
}) {
    const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const obj = { id, parentId: id, title, imageUrl, price };

    const onClickPlus = () => {
        onPlus(obj);
    };

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={600}
                    height={400}
                    viewBox="0 0 600 400"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <circle cx="31" cy="31" r="15" />
                    <rect x="-1" y="168" rx="10" ry="10" width="150" height="15" />
                    <rect x="0" y="0" rx="10" ry="10" width="158" height="144" />
                    <rect x="0" y="206" rx="10" ry="10" width="100" height="15" />
                    <rect x="0" y="230" rx="10" ry="10" width="80" height="25" />
                    <rect x="113" y="220" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
            ) : (
                <>
                    {onFavorite && (
                        <div className={styles.favorite} onClick={onClickFavorite}>
                            <img
                                src={isFavorite ? "/img/favorite_liked.png" : "/img/favorite_unliked.svg"}
                                alt="unliked"
                            />
                        </div>
                    )}
                    <img width={170} height={170} src={imageUrl} alt="cover" />
                    <h5>{title}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Price:</span>
                            <b>{price}$</b>
                        </div>
                        {onPlus && (
                            <img
                                className={styles.plus}
                                onClick={onClickPlus}
                                src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/plus.svg"}
                                alt="add"
                            />
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;
