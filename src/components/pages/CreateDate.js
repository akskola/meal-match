import React, { useState } from "react";
import "./CreateDate.css";

export default function CreateDate() {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [desirabilities, setDesirabilities] = useState({});

  const handleShowRestaurants = async () => {
    const cuisine1 = document.getElementById("cuisine1").value.toLowerCase();
    const dish1 = document.getElementById("dish1").value.toLowerCase();
    const cuisine2 = document.getElementById("cuisine2").value.toLowerCase();
    const dish2 = document.getElementById("dish2").value.toLowerCase();
    const location = document.getElementById("location").value.toLowerCase();

    try {
      const apiKey =
        "9SCo-9aeibBhnZOYBoAefUp7cZbBnXAaJ2nfBvLdrJspIhy4Onwv_BQ-me5oJkaVf6I6uHiDD5K1Z-6A3M2cpnIHOLlsuEogaKxCOR7Wgv5NUWD_BYXhZ6aEtLJSZHYx";
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const url = `${proxyUrl}https://api.yelp.com/v3/businesses/search?categories=${cuisine1},${cuisine2}&term=${dish1},${dish2}&location=${location}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      const data = await response.json();

      // Filter results to only include restaurants with both cuisine categories
      const filteredRestaurants = data.businesses.filter(
        (restaurant) =>
          restaurant.categories.some(
            (category) => category.alias === cuisine1
          ) &&
          restaurant.categories.some((category) => category.alias === cuisine2)
      );

      if (filteredRestaurants.length > 0) {
        setRestaurants(filteredRestaurants);
        console.log("filtered: ", filteredRestaurants);
      } else {
        // If no restaurants have both cuisine categories, display the top 5 restaurants with cuisine1 and cuisine2
        const cuisine1Restaurants = data.businesses
          .filter((restaurant) =>
            restaurant.categories.some(
              (category) => category.alias === cuisine1
            )
          )
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5);

        const cuisine2Restaurants = data.businesses
          .filter((restaurant) =>
            restaurant.categories.some(
              (category) => category.alias === cuisine2
            )
          )
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5);

        setRestaurants([...cuisine1Restaurants, ...cuisine2Restaurants]);
        console.log("Else c1: ", cuisine1Restaurants);
        console.log("Else c2: ", cuisine2Restaurants);
      }
    } catch (err) {
      setError("Error fetching data");
    }
  };

  const handleRateRestaurant = (id, rating) => {
    const updatedRestaurants = [...restaurants];
    const index = updatedRestaurants.findIndex((r) => r.id === id);
    updatedRestaurants[index].rating = rating;
    setRestaurants(updatedRestaurants);
  };

  const handleDesirability = (id, desirability) => {
    // handleRateDesirability(id, desirability);
    setDesirabilities({ ...desirabilities, [id]: desirability });
    console.log(desirabilities);
  };

  return (
    <div>
      <div className="create-date">
        <div className="create-date-container">
          <div className="create-date-container-title">Enter your choices</div>
          <div className="create-date-container-inputs">
            <div className="create-date-input-container">
              <label htmlFor="cuisine1">Cuisine</label>
              <input
                type="text"
                id="cuisine1"
                name="cuisine1"
                placeholder="Enter cuisine"
              />
            </div>
            <div className="create-date-input-container">
              <label htmlFor="dish1">Dish</label>
              <input
                type="text"
                id="dish1"
                name="dish1"
                placeholder="Enter dish"
              />
            </div>
          </div>
        </div>
        <div className="create-date-container">
          <div className="create-date-container-title">
            Enter your partner's choices
          </div>
          <div className="create-date-container-inputs">
            <div className="create-date-input-container">
              <label htmlFor="cuisine2">Cuisine</label>
              <input
                type="text"
                id="cuisine2"
                name="cuisine2"
                placeholder="Enter cuisine"
              />
            </div>
            <div className="create-date-input-container">
              <label htmlFor="dish2">Dish</label>
              <input
                type="text"
                id="dish2"
                name="dish2"
                placeholder="Enter dish"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="location-container">
        <div className="create-date-container">
          <div className="create-date-container-title">Enter your location</div>
          <div className="create-date-container-inputs">
            <div className="create-date-input-container">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter location"
              />
            </div>
            <div className="create-btn-container">
              <button className="create-btn" onClick={handleShowRestaurants}>
                Show Restaurants
              </button>
            </div>
          </div>
        </div>
      </div>
      {error && <p>{error}</p>}
      {restaurants.length > 0 && (
        <div className="restaurants-container">
          <h2>Available Restaurants:</h2>
          <ul className="all-restaurants">
            {restaurants.map((restaurant) => (
              <li key={restaurant.id} className="restaurant-container">
                <div className="image-container">
                  <img src={restaurant.image_url} alt={restaurant.name} />
                </div>
                <div className="restaurant-details">
                  <h3>{restaurant.name}</h3>
                  <p>
                    <strong>Cuisine:</strong>{" "}
                    {restaurant.categories
                      .map((category) => category.title)
                      .join(", ")}
                  </p>
                  <p>
                    <strong>Location:</strong> {restaurant.location.address1},{" "}
                    {restaurant.location.city}, {restaurant.location.state},{" "}
                    {restaurant.location.zip_code}
                  </p>
                  <p>
                    <strong>Rating:</strong> {restaurant.rating}
                  </p>
                  <p>
                    <strong>Reviews:</strong> {restaurant.review_count}
                  </p>
                  <div className="rating-container">
                    <p>Rate this restaurant:</p>
                    {[...Array(5)].map((_, index) => (
                      <button
                        key={index}
                        className={`rating-star ${
                          index < restaurant.rating ? "active" : ""
                        }`}
                        onClick={() =>
                          handleRateRestaurant(restaurant.id, index + 1)
                        }
                      >
                        &#9733;
                      </button>
                    ))}
                  </div>
                  <div className="desirability-container">
                    <p>How badly do you want to eat here?</p>
                    <div className="desirability-buttons">
                      {[...Array(10)].map((_, index) => (
                        <button
                          key={index}
                          className={`desirability-level ${
                            index + 1 <= desirabilities[restaurant.id]
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            handleDesirability(restaurant.id, index + 1)
                          }
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
