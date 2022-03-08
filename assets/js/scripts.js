const cartSidebarEl = document.querySelector('.cart-sidebar')
function openSidebar () {
     cartSidebarEl.classList.add('cart-sidebar-open')
}
function closeSidebar () {
     cartSidebarEl.classList.remove('cart-sidebar-open')
}

const btnCartEl = document.getElementById('btn-cart')
btnCartEl.addEventListener('click', openSidebar)

const btnCartcloseEl = document.getElementById('btn-close-cart')
btnCartcloseEl.addEventListener('click', closeSidebar)

const fetchProducts = () => {
    fetch('http://127.0.0.1:5500/products.json')
    .then(res => res.json())
    .then(data => {
        const groupsRootEl = document.querySelector('#groups-root')
     data.groups.forEach((item) => {
         const groupSectionEl = getSelectionElement(item)
         groupsRootEl.appendChild(groupSectionEl)  
     })
    })
    .catch(() => {
        console.log('Deu ruim')
        
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
            <p class="price">R$ ${product.price.toLocaleString('pt-br', { minimumFractionDigits: 2})}</p>
            ${product.description ? `<p>${product.description}<p>` : ' '}
            <button class="btn btn-main">Adicionar</button>
        </div> 
        `

            productsGridEl.appendChild(cardWrapEl)
        })

        return sectionEl
    }
fetchProducts()