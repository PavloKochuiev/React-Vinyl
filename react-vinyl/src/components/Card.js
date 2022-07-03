function Card() {
    return (
        <div className="card">
    <div className="favorite">
        <img src="/img/favorite_unliked.svg" alt="unliked" />
    </div>
    <img
        width={133}
        height={133}
        src="/img/covers/daft-punk-discovery.jpg"
        alt="daft-punk-discovery"
    />
    <h5>Daft Punk - Discovery</h5>
    <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
            <span>Price:</span>
            <b>60$</b>
        </div>
        <button className="button">
            <img width={11} height={11} src="/img/plus.png" alt="add"></img>
        </button>
    </div>
</div>
    );
}

export default Card;