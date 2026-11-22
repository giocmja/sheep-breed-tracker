import { useState } from "react";

function AddSheepForm({ onAddSheep, existingBreeds }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [origin, setOrigin] = useState("");
  const [rating, setRating] = useState("3");
  const [favorite, setFavorite] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setSuccessMessage("");

    const trimmedName = name.trim();
    const trimmedDescription = description.trim();
    const trimmedOrigin = origin.trim();
    const numericRating = Number(rating);

    if (
      trimmedName === "" ||
      trimmedDescription === "" ||
      trimmedOrigin === ""
    ) {
      alert("Please enter a breed name, description, and origin.");
      return;
    }

    if (
      rating.trim() === "" ||
      !Number.isInteger(numericRating) ||
      numericRating < 1 ||
      numericRating > 5
    ) {
      alert("Rating must be a whole number between 1 and 5.");
      return;
    }

    const isDuplicate = existingBreeds.some(
      (sheep) =>
        sheep.name.trim().toLowerCase() === trimmedName.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${trimmedName} is already in your collection.`);
      return;
    }

    const newSheep = {
      name: trimmedName,
      description: trimmedDescription,
      origin: trimmedOrigin,
      rating: numericRating,
      favorite: favorite
    };

    onAddSheep(newSheep);

    setSuccessMessage(`${trimmedName} was added successfully!`);

    setName("");
    setDescription("");
    setOrigin("");
    setRating("3");
    setFavorite(false);
  }

  return (
    <form className="add-sheep-form" onSubmit={handleSubmit}>
      <h2>Add a Sheep Breed</h2>

      {successMessage && (
        <p className="success-message" role="status">
          {successMessage}
        </p>
      )}

      <label htmlFor="breedName">
        Breed Name:
      </label>

      <input
        type="text"
        id="breedName"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
          setSuccessMessage("");
        }}
        required
      />

      <label htmlFor="description">
        Description:
      </label>

      <textarea
        id="description"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
          setSuccessMessage("");
        }}
        required
      />

      <label htmlFor="origin">
        Origin:
      </label>

      <input
        type="text"
        id="origin"
        value={origin}
        onChange={(event) => {
          setOrigin(event.target.value);
          setSuccessMessage("");
        }}
        required
      />

      <label htmlFor="rating">
        Rating (1–5):
      </label>

      <input
        type="number"
        id="rating"
        min="1"
        max="5"
        step="1"
        value={rating}
        onChange={(event) => {
          setRating(event.target.value);
          setSuccessMessage("");
        }}
        required
      />

      <label htmlFor="favorite">
        <input
          type="checkbox"
          id="favorite"
          checked={favorite}
          onChange={(event) => setFavorite(event.target.checked)}
        />
        Mark as Favorite
      </label>

      <button type="submit">
        Add Breed
      </button>
    </form>
  );
}

export default AddSheepForm;