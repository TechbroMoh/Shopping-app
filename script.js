// Array to store shopping list items
let items = [];


const itemInput = document.getElementById('userinput');
const addItemButton = document.getElementById('enter');
const itemList = document.getElementById('shoppingList');
const clearListButton = document.getElementById('clearList');


addItemButton.addEventListener('click', addItem);


itemList.addEventListener('click', togglePurchased);


clearListButton.addEventListener('click', clearList);

function addItem() {
  const newItemName = itemInput.value.trim();
  
  
  if (!newItemName) {
    alert('Please enter an item name.');
    return;
  }

  
  items.push({ name: newItemName, purchased: false });


  renderItems();
  itemInput.value = ''; 
}


function renderItems() {
  
  itemList.innerHTML = '';

  
  items.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = item.name;
    listItem.classList.add('list-group-item');

    
    if (item.purchased) {
      listItem.classList.add('purchased');
    }

    
    listItem.dataset.index = index;

    
    itemList.appendChild(listItem);
  });
}


function togglePurchased(e) {
  if (!e.target.matches('li')) return;

  const index = e.target.dataset.index;
  items[index].purchased = !items[index].purchased;

  renderItems();
}


function clearList() {
  items = [];
  renderItems();
}


renderItems();
