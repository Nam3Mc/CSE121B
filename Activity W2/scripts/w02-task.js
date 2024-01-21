/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Dreiser Morales';
const currentYear = new Date().getFullYear(); 
const profilePicture = 'images/placeholder.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#profilePicture');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = ['Pizza', 'Ice Cream', 'Sushi']; // Add your favorite foods
const newFavoriteFood = 'Burger'; // Add another favorite food

favoriteFoods.push(newFavoriteFood); // Add the new favorite food to the array

// Display the array content in the HTML element with the id of 'food'
foodElement.innerHTML += favoriteFoods.join('<br>');

// Remove the first element in the favorite food array
favoriteFoods.shift();

// Display the modified array content in the HTML element with the id of 'food'
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;