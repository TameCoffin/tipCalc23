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
        type: 'appetizers',
        items: 'salmon dip',
        desc: 'fresh salmon dip and toast',
        imgUrl: 'salmondip.jpg',
        price: 18.99,
        qty: 0
    },
    {
        id: 2,
        type: 'appetizers',
        items: 'onion rings',
        desc: 'deep fried onion rings with comback sauce',
        imgUrl: 'onionrings.jpg',
        price: 8.99,
        qty: 0
    },
    {
        id: 3,
        type: 'appetizers',
        item: 'guacamole dip',
        desc: 'fresh guacamole and pico de gallo made to order and served with chips',
        imgUrl: 'guacamole.jpg',
        price: 7.99,
        qty: 0
    },
    {
        id: 4,
        type: 'appetizers',
        item: 'spinach & artichoke dip',
        desc: 'creamy spinach and artichoke tip served with chips',
        imgUrl: 'spinach.jpg',
        price: 8.99,
        qty: 0
    },
    {
        id: 5,
        type: 'entrees',
        item: 'chicken sandwich',
        desc: 'breaded chicken breast on a bun with pickles and lettuce',
        imgUrl: '',
        price: 12.99,
        qty: 0
    },
    {
        id: 6,
        type: 'entrees',
        item: 'veggie burger',
        desc: 'bean veggie patty served with fries',
        imgUrl: '',
        price: 12.99,
        qty: 0
    },
    {
        id: 7,
        type: 'entrees',
        item: 'salmon',
        desc: 'atlantic salmon served over grits with a side of spinach',
        imgUrl: '',
        price: 15.99,
        qty: 0
    },
    {
        id: 8,
        type: 'entrees',
        item: 'pizza',
        desc: 'pepperoni and tomato pizza. 6 slices',
        imgUrl: '',
        price: 16.99,
        qty: 0
    },
    {
        id: 9,
        type: 'drinks',
        item: 'lemonade',
        desc: 'fresh squeezed lemonade',
        imgUrl: '',
        price: 3.99,
        qty: 0
    },
    {
        id: 10,
        type: 'drinks',
        item: 'beer',
        desc: 'beer',
        imgUrl: '',
        price: 3.99,
        qty: 0
    },
    {
        id: 11,
        type: 'drinks',
        item: 'wine',
        desc: 'glass of wine',
        imgUrl: '',
        price: 7.99,
        qty: 0
    },
    {
        id: 12,
        type: 'drinks',
        item: 'sweet tea',
        desc: 'layer sponge cake',
        imgUrl: '',
        price: 6.99,
        qty: 0
    },
    {
        id: 13,
        type: 'desserts',
        item: 'tiramisu',
        desc: 'layered sponge cake',
        imgUrl: '',
        price: 8.99,
        qty: 0
    },
    {
        id: 14,
        type: 'desserts',
        item: 'brownie',
        desc: 'chocolate brownie served with ice cream',
        imgUrl: '',
        price: 7.99,
        qty: 0
    },
    {
        id: 15,
        type: 'desserts',
        item: 'cookie',
        desc: 'chocolate chip cookie',
        imgUrl: '',
        price: 7.99,
        qty: 0
    },
    {
        id: 16,
        type: 'desserts',
        item: 'ice cream',
        desc: 'chocolate and vanilla ice cream',
        imgUrl: '',
        price: 6.99,
        qty: 0
    }
]

// grab the menu-divs
const menuDivs = document.querySelectorAll('.menu-div')

// grab the types
const menuType = ['appetizers', 'entrees', 'drinks', 'desserts']

menuDivs.forEach(div => {
    const menuSubheading = document.createElement('h3')
    menuSubheading.classList.add('menu-subheading', 'text-capitalize');

    const row = document.createElement('div')
    row.classList.add('row')
    
    div.appendChild(menuSubheading)
    div.appendChild(row)

})

for (let i = 0; i < menuType.length; i++) {
    menuDivs[i].children[0].innerText = menuType[i]
    console.log(menuDivs[i].children[1])

    menuDivs[i].children[1].setAttribute("id", `${menuType[i]}Row`)
}

// load the menu items
// grab the appRow
const appRow = document.getElementById('appetizersRow');
const entreesRow = document.getElementById('entreesRow');
const drinksRow = document.getElementById('drinksRow');
const dessertsRow = document.getElementById('dessertsRow')

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
        <button class="btn btn-danger text-capitalize cart-btn" id="Btn${item.id}"data-price="${item.price}">add to card</button>
    </footer>
    `
    column.appendChild(card);
    // console.log(column);

    // appRow.appendChild(column);

    // switch (menuItems.type)
    switch (item.type) {
        case 'appetizers':
            appRow.appendChild(column)
            break;
        case 'entrees' :
            entreesRow.appendChild(column)
            break;
        case 'drinks' :
            drinksRow.appendChild(column)
            break;
        case 'desserts': 
            dessertsRow.appendChild(column)
            break;
        default: 
            console.log('Error')
            break;
    }
})

const cartButtons = document.querySelectorAll('.cart-btn')
const cartSubtotal = document.getElementById('cartSubtoatl')
let subtotal; 

// add items to cart
cartButtons.forEach(button => {

    const price = parseFloat(button.getAttribute('data-price'))
    button.addEventListener('click', ()=> {
        subtotal+=price
        cartSubtotal.innerText = subtotal
    })
})

