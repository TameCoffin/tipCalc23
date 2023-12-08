const confirmBtn = document.getElementById('confirmBtn');
const totalDisplay = document.getElementById('total');

// confirm button
confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    const subtotal = parseFloat(document.getElementById('subtotalInput').value)
    const tipAmt = parseFloat(document.getElementById('tipAmt').value)
    const otherAmt = parseFloat(document.getElementById(otherAmt).value)

    let total;
    
    isNaN(tipAmt) ? total = subtotal + otherAmt : total = (subtotal * tipAmt) + subtotal

    console.log(tipAmt)

    // toFixed is how many decimal points you want

    totalDisplay.innerText = total.toFixed(2)
})

// create menu items. array of objects
let menuItems = [
    {
        id: 1,
        type: 'appetizer',
        items: 'salmon dip',
        desc: 'fresh salmon dip and toast',
        imgUrl: 'salmondip.jpg',
        price: 18.99,
        qty: 0
    },
    {
        id: 2,
        type: 'appetizer',
        items: 'onion rings',
        desc: 'deep fried onion rings with comback sauce',
        imgUrl: 'onionrings.jpg',
        price: 8.99,
        qty: 0
    },
    {
        id: 3,
        type: 'appetizer',
        item: 'guacamole dip',
        desc: 'fresh guacamole and pico de gallo made to order and served with chips',
        imgUrl: 'guacamole.jpg',
        price: 7.99,
        qty: 0
    },
    {
        id: 4,
        type: 'appetizer',
        item: 'spinach & artichoke dip',
        desc: 'creamy spinach and artichoke tip served with chips',
        imgUrl: 'spinach.jpg',
        price: 8.99,
        qty: 0
    },
    {
        id: 5,
        type: 'entree',
        item: 'chicken sandwich',
        desc: 'breaded chicken breast on a bun with pickles and lettuce',
        imgUrl: '',
        price: 12.99,
        qty: 0
    },
    {
        id: 6,
        type: 'entree',
        item: 'veggie burger',
        desc: 'bean veggie patty served with fries',
        imgUrl: '',
        price: 12.99,
        qty: 0
    },
    {
        id: 7,
        type: 'entree',
        item: 'salmon',
        desc: 'atlantic salmon served over grits with a side of spinach',
        imgUrl: '',
        price: 15.99,
        qty: 0
    },
    {
        id: 8,
        type: 'entree',
        item: 'pizza',
        desc: 'pepperoni and tomato pizza. 6 slices',
        imgUrl: '',
        price: 16.99,
        qty: 0
    },
    {
        id: 9,
        type: 'drink',
        item: 'lemonade',
        desc: 'fresh squeezed lemonade',
        imgUrl: '',
        price: 3.99,
        qty: 0
    },
    {
        id: 10,
        type: 'drink',
        item: 'beer',
        desc: 'beer',
        imgUrl: '',
        price: 3.99,
        qty: 0
    },
    {
        id: 11,
        type: 'drink',
        item: 'wine',
        desc: 'glass of wine',
        imgUrl: '',
        price: 7.99,
        qty: 0
    },
    {
        id: 12,
        type: 'drink',
        item: 'sweet tea',
        desc: 'layer sponge cake',
        imgUrl: '',
        price: 6.99,
        qty: 0
    },
    {
        id: 13,
        type: 'dessert',
        item: 'tiramisu',
        desc: 'layered sponge cake',
        imgUrl: '',
        price: 8.99,
        qty: 0
    },
    {
        id: 14,
        type: 'dessert',
        item: 'brownie',
        desc: 'chocolate brownie served with ice cream',
        imgUrl: '',
        price: 7.99,
        qty: 0
    },
    {
        id: 15,
        type: 'dessert',
        item: 'cookie',
        desc: 'chocolate chip cookie',
        imgUrl: '',
        price: 7.99,
        qty: 0
    },
    {
        id: 16,
        type: 'dessert',
        item: 'ice cream',
        desc: 'chocolate and vanilla ice cream',
        imgUrl: '',
        price: 6.99,
        qty: 0
    }
]

// load the menu items
// grab the appRow
const appRow = document.getElementById('appRow');

menuItems.forEach(item => {
    const column = document.createElement('div')
    column.classList.add('col-md-3')
    const card = document.createElement('div')
    card.classList.add('card', 'h-100')
    card.innerHTML = `
    <img src="media/${item.imgUrl}" alt="${item.desc}" class="img-fluid menu-image card-image-top">
    <div class="card-body">
        <h4 class="card-title">${item.item}</h4>
        <p class="card-text">${item.desc}</p>
    </div>
    <footer class="card-footer">
        <p class="card-text item-price">${item.price}</p>
        <button class="btn btn-danger text-capitalize" id="cartBtn">add to card</button>
    </footer>
    `
    column.appendChild(card);
    console.log(column);

    appRow.appendChild(column)
})

