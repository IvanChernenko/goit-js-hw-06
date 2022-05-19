const itemEl = document.querySelectorAll('.item')

console.log(`Number of categories: ${itemEl.length}`)

itemEl.forEach((liEl) => {
    console.log(`Category: ${liEl.querySelector('h2').textContent}`)
    console.log(`Elements: ${liEl.querySelectorAll('li').length}`)
})

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies