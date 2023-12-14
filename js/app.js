const confirmBtn = document.getElementById('confirmBtn');
const totalDisplay = document.getElementById('total');
const cartSubtotal = document.getElementById('cartSubtotal')
const menuDivs = document.querySelectorAll('.menu-div')
const receipt = document.getElementById('receipt')

// confirm button
confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    getTotal()
})

const getTotal=()=> {
    const subtotal = parseFloat(cartSubtotal.innerText)
    const tipAmt = parseFloat(document.getElementById('tipAmt').value)
    const otherAmt = parseFloat(document.getElementById('otherAmt').value)
    const yourTip = document.getElementById('yourTip')
    const theSubtotal = document.getElementById('theSubtotal')
    const taxDisplay = document.getElementById('tax')

    let taxTotal = subtotal * tax;

    let receiptTip = isNaN(tipAmt) ? otherAmt : (subtotal * tipAmt)
    
    let total = isNaN(tipAmt) ? subtotal + otherAmt + taxTotal : (subtotal * tipAmt) + subtotal + taxTotal
    
    theSubtotal.innerText = subtotal
    taxDisplay.innerText = taxTotal.toFixed(2)
    yourTip.innerText = receiptTip.toFixed(2)
    totalDisplay.innerText = total.toFixed(2)
}

// make receipt 
const makeReceipt =(obj, el)=> {
    const tableRow = document.createElement('tr')
    tableRow.classList.add('receipt-item', 'text-start')

    const receiptChoice = document.createElement('td')
    receiptChoice.classList.add('receipt-choice', 'text-center')
    receiptChoice.innerText = obj.item

    const receiptQty = document.createElement('td')
    receiptQty.classList.add('receipt-qty', 'text-center')
    // receiptQty.setAttribute('id', 'receiptQty') // "setAttribute" will create an id
    receiptQty.setAttribute('id',`qty${obj.id}`)
    receiptQty.innerText = obj.qty

    const receiptPrice = document.createElement('td')
    receiptPrice.classList.add('receipt-price', 'text-center')
    receiptPrice.innerText = obj.price

    const itemSubtotal = document.createElement('td')
    itemSubtotal.classList.add('item-subtotal', 'text-center')
    itemSubtotal.setAttribute('id', `subTotal${obj.id}`)
    itemSubtotal.innerText = obj.itemTotal

    tableRow.appendChild(receiptChoice)
    tableRow.appendChild(receiptQty)
    tableRow.appendChild(receiptPrice)
    tableRow.appendChild(itemSubtotal)

    el.appendChild(tableRow)
}

const updateReceipt =(obj, qty, itemTotal)=> {
    
    const receiptQty = document.getElementById(`qty${obj.id}`)
    receiptQty.innerText = qty

    const itemSubtotal = document.getElementById(`subTotal${obj.id}`)
    itemSubtotal.innerText = itemTotal.toFixed(2)
}

// create menu items. array of objects
let menuItems = [
    {
        id: 1,
        type: 'appetizers',
        items: 'salmon dip',
        desc: 'fresh salmon dip and toast',
        imgUrl: 'salmondip.jpg',
        price: 18.99,
        qty: 10
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
    // console.log(menuDivs[i].children[1])

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
        <div class="buttons-div d-flex justify-content-around">
            <button 
                class="btn btn-danger text-capitalize cart-btn" 
                id="Btn${item.id}"
                data-id="${item.id}"
                data-price="${item.price}"
                data-qty="${item.qty}"
                data-item="${item.item}"
            >add to card</button>
            <div class="qty-div">
                <button 
                class="btn btn-primary btn-subtract" 
                id="btnSubtract${item.id}"
                data-id="${item.id}"
                data-qty="${item.qty}"
                > - </button>
                <span class="quantity" id="quantity${item.id}">${item.qty}</span>
                <button 
                class="btn btn-primary btn-add" 
                id="btnAdd${item.id}"
                data-id="${item.id}"
                data-qty="${item.qty}"
                > + </button>
            </div>
        </div>
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


let subtotal = 0; 
let tax = .07;

let receiptArray = []

const cartButtons = document.querySelectorAll('.cart-btn')
// add items to cart
cartButtons.forEach(button => {
    
    const price = parseFloat(button.getAttribute('data-price'))
    const item = button.getAttribute('data-item')
    const id = parseFloat(button.getAttribute('data-id'))

    button.addEventListener('click', ()=> {
        let qty;
        for (let i = -0; i < menuItems.length; i++) {
            menuItems[i].id == id ? qty = menuItems[i].qty : null
        }
        console.log(qty);
        addItems(price, qty, item, id)
    })
})

const addItems =(price, qty, item, id)=> {
    
    let itemObj = {
        id,
        item,
        qty,
        price,
        itemTotal: qty * price
    }

    console.log(itemObj);

    receiptArray = [...receiptArray, itemObj]
    makeReceipt(itemObj, receipt)


    subtotal+= itemObj.itemTotal
    cartSubtotal.innerText = subtotal.toFixed(2)
}

const btnSubtract = document.querySelectorAll('.btn-subtract')
const btnAdd = document.querySelectorAll('.btn-add')

btnSubtract.forEach(button => {
    button.addEventListener('click', ()=> {
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quantity${btnId}`)

        for (let i = 0; i < menuItems.length; i++) {
            if(menuItems[i].id == btnId && menuItems[i].qty > 0) {
                menuItems[i].qty-=1
                spanQty.innerText = menuItems[i].qty
            }
        }
    })
})

console.log(cartButtons[12].dataset.qty);

btnAdd.forEach(button => {
    button.addEventListener('click', ()=> {
        const btnQty = parseFloat(button.getAttribute('data-qty'))
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quantity${btnId}`)

        for (let i = 0; i < menuItems.length; i++) {
            if(menuItems[i].id == btnId 
                && menuItems[i].qty < 20 
                && cartButtons[i].dataset.id == btnId) {
                menuItems[i].qty+=1
                cartButtons[i].setAttribute('data-qty', menuItems[i].qty)
                spanQty.innerText = menuItems[i].qty
            }
        }
    })
})

// Examples using spread operator: let arr = [
//     'hello',
//     'my',
//     'name',
//     'is'
// ]

// let numArr = [
//     1, 2, 3, 4,
// ]

// console.log(...arr);
// console.log(...numArr);

// let newArr = [...arr, 'Seth'];

// console.log(newArr);