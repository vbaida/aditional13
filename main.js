// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

//

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
    let h2 = document.createElement('h1')
    let h3 = document.createElement('h1')
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