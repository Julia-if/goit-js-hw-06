const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');


ingredients.map(ingredient => {

    const ingredientItem = document.createElement("li");
    ingredientItem.textContent = ingredient;
    ingredientItem.classList.add("item");
    ingredientsRef.after(ingredientItem);
});