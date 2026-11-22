function Header({ title, totalBreeds, favoriteCount, averageRating }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>My favorite sheep breeds!</p>
      <p>Total breeds: {totalBreeds}</p>
      <p>Favorite breeds: {favoriteCount}</p>
      <p>Average rating: {averageRating}</p>
    </header>
  );
}

export default Header;