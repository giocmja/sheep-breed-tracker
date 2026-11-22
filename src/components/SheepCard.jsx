function SheepCard({ sheep, onToggleFavorite, onIncreaseRating }) {
  return (
    <article className="sheep-card">
      <h2>{sheep.name}</h2>
      <p>{sheep.description}</p>
      <p>Origin: {sheep.origin}</p>
      <p>Rating: {sheep.rating}/5</p>
      <p>{sheep.favorite ? "❤️ Favorite Breed!" : "Not a favorite yet"}</p>

      <div className="actions">
        <button onClick={() => onToggleFavorite(sheep.id)}>
          {sheep.favorite ? "Remove Favorite" : "Add Favorite"}
        </button>
        <button
          onClick={() => onIncreaseRating(sheep.id)}
          disabled={sheep.rating >= 5}
        >
          Increase Rating
        </button>
      </div>
    </article>
  );
}

export default SheepCard;