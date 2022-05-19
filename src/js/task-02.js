const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const li = ingredients.map((strEl) => {
  const liEl = document.createElement('li')
  liEl.textContent = strEl
  liEl.className = 'item'
  return liEl
})

document.querySelector('#ingredients').append(...li)