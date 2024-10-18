const vegetableList = [];

const addVegetable = (event) => {
    event.preventDefault();

    const name = document.getElementById('vegetable-name').value;
    const price = parseFloat(document.getElementById('vegetable-price').value);
    
    // Destructure and update the vegetable list
    const newVegetable = { name, price };
    vegetableList.push(newVegetable);

    // Clear the input fields
    document.getElementById('vegetable-name').value = '';
    document.getElementById('vegetable-price').value = '';

    displayVegetables();
};

const displayVegetables = () => {
    const vegetableListElement = document.getElementById('vegetable-list');
    vegetableListElement.innerHTML = ''; // Clear the current list

    vegetableList.forEach(({ name, price }) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${name}: ${price.toFixed(2)} KES`;
        vegetableListElement.appendChild(listItem);
    });
};

// Event listener
const form = document.getElementById('vegetable-form');
form.addEventListener('submit', addVegetable);