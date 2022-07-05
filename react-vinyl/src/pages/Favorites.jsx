import Card from '../components/Card';

function Favorites({ items, onAddToFavorites }) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>My favorites</h1>
            </div>
            <div className="d-flex flex-wrap">
                {items.map((item, index) => (
                    <Card
                        index={item.title}
                        favorited={true}
                        onFavorite={onAddToFavorites}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favorites;