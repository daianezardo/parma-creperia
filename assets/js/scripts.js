const cartSidebarEl = document.querySelector('.cart-sidebar')
function openSidebar() {
    cartSidebarEl.classList.add('cart-sidebar-open')
}
function closeSidebar() {
    cartSidebarEl.classList.remove('cart-sidebar-open')
}


const btnCartEl = document.getElementById('btn-cart')
btnCartEl.addEventListener('click', openSidebar)

const btnCartcloseEl = document.getElementById('btn-close-cart')
btnCartcloseEl.addEventListener('click', closeSidebar)

const fetchProducts = () => {
    const groupsRootEl = document.querySelector('#groups-root')
    fetch('/products.json')
        .then(res => res.json())
        .then(data => {
            data.groups.forEach((item) => {
                const groupSectionEl = getSelectionElement(item)
                groupsRootEl.appendChild(groupSectionEl)
            })
        })
        .catch(() => {
            groupsRootEl.innerHTML = '<p class="error-alert">Falha ao buscar produtos. Por favor tente novamente.</p>'

        })
}
const getSelectionElement = (group) => {
    const sectionEl = document.createElement('section')
    const sectionTitleEl = document.createElement('h2')
    sectionTitleEl.textContent = group.name
    sectionEl.appendChild(sectionTitleEl)
    const productsGridEl = document.createElement('div')
    productsGridEl.classList.add('products-grid')
    sectionEl.appendChild(productsGridEl)
    group.products.forEach((product) => {
        const cardWrapEl = document.createElement('article')
        cardWrapEl.classList.add('card')
        cardWrapEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="316" height="193">
            <div class="card-content">
            <h3>${product.name}</h3>
            <p class="price">R$ ${product.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>
            ${product.description ? `<p>${product.description}</p>` : ' '}
            <button class="btn btn-main">Adicionar</button>
        </div> 
        `
        const btnAddCartEl = cardWrapEl.querySelector('button')
        btnAddCartEl.addEventListener('click', () => {
            addTocart(product)
        })

        productsGridEl.appendChild(cardWrapEl)
    })

    return sectionEl
}
fetchProducts()

let productsCart = []
const addTocart = newProduct => {
    const productIndex = productsCart.findIndex
    
    (item => item.id === newProduct.id)

    if (productIndex === -1) {
        productsCart.push(
            {
                ...newProduct,
                qty: 1
            }
        )
    } else {
        productsCart[productIndex].qty++
    }

    handleCartUpdade()
}
    const removeOfCart = id => {
       productsCart = productsCart.filter((product) => {
            if (product.id === id) {
                return false
            }
                return true
        })
        handleCartUpdade()
    }

const handleCartUpdade = () => {
    const emptyCartEl = document.querySelector('#empty-cart')
    const cartWithProductsEl = document.querySelector('#cart-with-products')
    const cartProductsListEl = cartWithProductsEl.querySelector('ul')
    const CartBadgeEl = document.querySelector('.btn-cart-badge')
    if (productsCart.length > 0) {
        // Calcula totais
        let total = 0
        let totalPrice = 0
        productsCart.forEach(product => {
            total = total + product.qty
            totalPrice = totalPrice + product.price * product.qty
        })
        // Atualizar a badge
        CartBadgeEl.classList.add('btn-cart-badge-show')
        CartBadgeEl.textContent = total
        // Atualiza o total do carrinho
        const cartTotalEl = document.querySelector('.cart-total p:last-child')
        cartTotalEl.textContent = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})
        
        // Exibir carrinho com produtos
        cartWithProductsEl.classList.add('cart-with-products-show')
        emptyCartEl.classList.remove('empty-cart-show')
        // Exibir produtos do carrinho na tela
        cartProductsListEl.innerHTML = ''
        productsCart.forEach((product) => {
            const listItemEl = document.createElement('li')
            listItemEl.innerHTML =  `
            <img src="${product.image}" alt="${product.name}" width="70"
                height="70">
            <div>
                <p class="h3">${product.name}</p>
                <p class="price">R$ ${product.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>
            </div>
            <input class="form-input" type="number" value="${product.qty}"/>
            <button>
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `
           const btnRemoveEl = listItemEl.querySelector('button')
           btnRemoveEl.addEventListener('click', () => {
               removeOfCart(product.id)
           })
            cartProductsListEl.appendChild(listItemEl)
        })
        // Calcular o valor total do carrinho

    }   else {
        // Esconder badge
        CartBadgeEl.classList.remove('btn-cart-badge-show')
          // Exibir carrinho vazio
        emptyCartEl.classList.add('empty-cart-show')
        cartWithProductsEl.classList.remove('cart-with-products-show')
    }
}
handleCartUpdade()

