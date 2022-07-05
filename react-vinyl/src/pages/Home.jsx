import Card from "../components/Card";

function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorites, onAddToCart}) {
    return (
<div className="content p-40">
    <div className="d-flex align-center mb-40 justify-between">
        <h1>{searchValue ? `Search on: "${searchValue}"` : `All Vinyls`}</h1>
        <div className="search-block d-flex align-center">
            <img
                width={25}
                height={25}
                src="/img/search.png"
                alt="search"
            ></img>
            {searchValue && (
                <img
                    onClick={() => setSearchValue("")}
                    className="clear cu-p"
                    src="/img/btn-remove.svg"
                    alt="Clear"
                />
            )}
            <input
                onChange={onChangeSearchInput}
                value={searchValue}
                placeholder="Search..."
            />
        </div>
    </div>
    <div className="d-flex flex-wrap">
        {items
            .filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
                <Card
                    index={item.title}
                    onFavorite={(obj) => onAddToFavorites(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    {...item}
                />
            ))}
    </div>
</div>
    )
}

export default Home;