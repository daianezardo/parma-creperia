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
        console.log('Acabou o Json', data.groups)
        for (let contador = 0;contador < data.groups.length;contador++) {
            console.log(data.groups[contador])
        const groupSectionEl = getSelectionElement(data.groups[contador])
        groupsRootEl.appendChild(groupSectionEl)
        }
    })
    // .catch((error) => {

    //     console.log('Deu ruim')
        
    //     console.log(error)
        
    //     })
}
    const getSelectionElement = (group) => {
        const sectionEl = document.createElement('section')
        const sectionTitleEl = document.createElement('h2')
        sectionTitleEl.textContent = group.name
        sectionEl.appendChild(sectionTitleEl)
        return sectionEl
    }

fetchProducts() 