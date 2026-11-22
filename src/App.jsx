import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import SheepCard from './components/SheepCard.jsx';
import AddSheepForm from "./components/AddSheepForm.jsx";

const initialSheepBreeds = [
  { id: 1, name: "Babydoll Southdown", description: "A small, fluffy sheep with a teddy bear face.", origin: "England", rating: 4, favorite: true },
  { id: 2, name: "Border Leicester", description: "Known for long ears and curly wool.", origin: "England", rating: 3, favorite: true },
  { id: 3, name: "Valais Blacknose", description: "A fluffy sheep with a distinctive black face.", origin: "Switzerland", rating: 1, favorite: true },
  { id: 4, name: "Jacob Sheep", description: "A spotted sheep that can have multiple horns.", origin: "England", rating: 3, favorite: false },
  { id: 5, name: "Bruce Wayne", description: "A large sheep with long, dark black shaggy curls of wool.", origin: "Unknown", rating: 5, favorite: true }
];

function App() {
  const [sheepBreeds, setSheepBreeds] = useState(initialSheepBreeds);

  function toggleFavorite(id) {
    setSheepBreeds(previousBreeds =>
      previousBreeds.map(sheep => {
        if (sheep.id === id) {
          return { ...sheep, favorite: !sheep.favorite };
        }
        return sheep;
      })
    );
  }

  function increaseRating(id) {
    setSheepBreeds(previousBreeds =>
      previousBreeds.map(sheep => {
        if (sheep.id === id) {
          return { ...sheep, rating: Math.min(5, sheep.rating + 1) };
        }
        return sheep;
      })
    );
  }

  function addSheep(newSheep) {
    setSheepBreeds(previousBreeds => {
      const nextId = previousBreeds.reduce(
        (highestId, sheep) => Math.max(highestId, sheep.id),
        0
      ) + 1;

      return [
        ...previousBreeds,
        {
          ...newSheep,
          id: nextId
        }
      ];
    });
  }

  const favoriteCount = sheepBreeds.filter(sheep => sheep.favorite).length;

  const totalRating = sheepBreeds.reduce(
    (total, sheep) => total + sheep.rating,
    0
  );

  const averageRating =
    sheepBreeds.length > 0
      ? (totalRating / sheepBreeds.length).toFixed(1)
      : "0.0";

  return (
    <main className="container">
      <Header
        title="🐑 Sheep Breed Tracker"
        totalBreeds={sheepBreeds.length}
        favoriteCount={favoriteCount}
        averageRating={averageRating}
      />

      <AddSheepForm
        onAddSheep={addSheep}
        existingBreeds={sheepBreeds}
      />

      <section className="sheep-list">
        {sheepBreeds.map(sheep => (
          <SheepCard
            key={sheep.id}
            sheep={sheep}
            onToggleFavorite={toggleFavorite}
            onIncreaseRating={increaseRating}
          />
        ))}
      </section>
    </main>
  );
}

export default App;