
// let productsContainer = document.getElementsByClassName('products')[0]
// let products = [
// {
//     name:'milk',
//         many:1,
//         price: 10,
//         url:'https://via.placeholder.com/600/92c952',
// },
//
// {
//     name: 'Milk',
//     many: 1,
//     price: 10,
//     url: "https://via.placeholder.com/600/92c952",
// },
//     {
//     name: 'Milk',
//     many: 1,
//     price: 10,
//     url: 'https://via.placeholder.com/600/92c952'
//
// },
//     {
//     name: 'Milk',
//     many: 1,
//     price: 10,
//     url: 'https://via.placeholder.com/600/92c952'
//
// },
//     {
//     name: 'Milk',
//     many: 1,
//     price: 10,
//     url: 'https://via.placeholder.com/600/92c952'
//
// }
// ]
//
// for (const product of products) {
//     let divproduct = document.createElement('div')
//     divproduct.classList.add('container')
//     let h1 = document.createElement('h1')
//     h1.innerText = `Назва продукта: ${product.name} Кількість: ${product.many} Ціна:${product.price}`
//     let img = document.createElement('img')
//     img.src = product.url
//
//
//
//
// divproduct.appendChild(img)
// divproduct.appendChild(h1)
// productsContainer.appendChild(divproduct)
// }



let productsContainer = document.getElementsByClassName('products')[0]

let products = [
    {
        name:'milk',
        many:1,
        price: 10,
        image:`https://img.fozzyshop.com.ua/204151-thickbox_default/moloko-prostokvashino-pasterizovannoe-25.jpg`
    },

    {
        name: 'Milk',
        many: 1,
        price: 10,
        image: `https://img.fozzyshop.com.ua/204151-thickbox_default/moloko-prostokvashino-pasterizovannoe-25.jpg`
    },
    {
        name: 'Milk',
        many: 1,
        price: 10,
        image: `https://img.fozzyshop.com.ua/204151-thickbox_default/moloko-prostokvashino-pasterizovannoe-25.jpg`

    },
    {
        name: 'Milk',
        many: 1,
        price: 10,
        image: `https://img.fozzyshop.com.ua/204151-thickbox_default/moloko-prostokvashino-pasterizovannoe-25.jpg`

    },
    {
        name: 'Milk',
        many: 1,
        price: 10,
        image: `https://img.fozzyshop.com.ua/204151-thickbox_default/moloko-prostokvashino-pasterizovannoe-25.jpg`


    }
]

for (const product of products) {

    let divproduct = document.createElement('div')
    divproduct.classList.add('product')
    let divh = document.createElement('div')
    divh.classList.add('tekst')
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')
    let h3 = document.createElement('h3')
        h1.innerText = `Назва продукта: ${product.name} `
        h2.innerText = ` Кількість: ${product.many} `
        h3.innerText = `Ціна:${product.price}`
    let img = document.createElement('img')
    img.src= product.image





    divh.append(h1,h2,h3)
    divproduct.appendChild(img)
    divproduct.appendChild(divh)
    productsContainer.appendChild(divproduct)


}
