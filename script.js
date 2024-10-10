// script.js

let inventory = [];
let tokens = 0;

// Add item to inventory
document.getElementById('addItemForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const itemQuantity = document.getElementById('itemQuantity').value;
    const itemManufactured = document.getElementById('itemManufactured').value;
    const itemExpiration = document.getElementById('itemExpiration').value;

    const item = {
        name: itemName,
        quantity: itemQuantity,
        manufactured: itemManufactured,
        expiration: itemExpiration,
    };

    inventory.push(item);
    updateInventoryList();
});

// Update inventory display
function updateInventoryList() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = '';

    inventory.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${item.name} - Quantity: ${item.quantity}, Manufactured: ${item.manufactured}, Expiry: ${item.expiration}`;
        inventoryList.appendChild(listItem);
    });

    generateShoppingList();
}

// Generate shopping list based on low stock
function generateShoppingList() {
    const shoppingList = document.getElementById('shoppingList');
    shoppingList.innerHTML = '';

    inventory.forEach(item => {
        if (item.quantity < 2) {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `${item.name}`;
            shoppingList.appendChild(listItem);
        }
    });
}

// Reward tokens
function rewardTokens() {
    tokens += 10;
    document.getElementById('tokenCount').textContent = `Total Tokens: ${tokens}`;
}
