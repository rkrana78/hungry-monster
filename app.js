function favouriteMeal(){
    const mealName = document.getElementById('input-meal').value;
    document.getElementById('meal-results').innerHTML = '';
    let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + mealName;
        
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data))
        
    .catch(error => alert('Meal NOT FOUND..!'));

}
const displayFood = data => {
    const mealsContainer = document.getElementById('meal-results');
    data.meals.forEach(food => {
        const foodContainer = document.createElement('div');
         foodContainer.className = 'food-list';
         const foodInfo = `
         <div onclick="displayDetails('${food.idMeal}')"> 
         <a href="#"> 
         <img src="${food.strMealThumb}"  alt="food">
         <h3 class="card-text">${food.strMeal}</h3>
        </a>
        </div>
         `;
         foodContainer.innerHTML = foodInfo;
         mealsContainer.appendChild(foodContainer);
    });
}

const displayDetails = foodName => {
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + foodName;
    fetch(url)
    .then(res => res.json())
    .then( data => renderFoodDetails(data))
}

const renderFoodDetails = data => {
    const foodDetailsContainer = document.getElementById('foods-details');
    data.meals.forEach(foodsArray => {
        const foodDetails = `
        <div class="food-ingredients">
            <img class="img-fluid rounded mb-4" src="${foodsArray.strMealThumb}" alt="">
            <h3>${foodsArray.strMeal}</h3>    
            <h5 class="py-3">Ingredients</h5>
            <ul>
            <li>${foodsArray.strMeasure1}, ${foodsArray.strIngredient1}</li>
            <li>${foodsArray.strMeasure2}, ${foodsArray.strIngredient2}</li>
            <li>${foodsArray.strMeasure3}, ${foodsArray.strIngredient3}</li>
            <li>${foodsArray.strMeasure4}, ${foodsArray.strIngredient4}</li>
            <li>${foodsArray.strMeasure5}, ${foodsArray.strIngredient5}</li>
            <li>${foodsArray.strMeasure6}, ${foodsArray.strIngredient6}</li>
            <li>${foodsArray.strMeasure7}, ${foodsArray.strIngredient7}</li>
            <li>${foodsArray.strMeasure8}, ${foodsArray.strIngredient8}</li>
            <li>${foodsArray.strMeasure9}, ${foodsArray.strIngredient9}</li>
            <li>${foodsArray.strMeasure10}, ${foodsArray.strIngredient10}</li>
            </ul>
        </div>
        `;
        foodDetailsContainer.innerHTML = foodDetails;
    })
        
  
}
    
