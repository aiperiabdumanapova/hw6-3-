fetch('https://fakestoreapi.com/products').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        document.querySelector('.all_products').innerHTML += `
        <div class="all_products_item" data-id="${data[i].id}">
            <img src="${data[i].image}">
            <h2>Name: ${data[i].title}</h2>
            <h2>Price: ${data[i].price}</h2>
            <button>Добавить в корзину</button>
        </div>
        `;
    }

const productItems = document.querySelectorAll('.all_products_item');
productItems.forEach(item => {
    item.addEventListener('click', (event) => {
        const productId = item.getAttribute('data-id');
        const productData = data.find(product => product.id == productId);

        if (productData) {
            document.getElementById('modalImage').src = productData.image;
            document.getElementById('modalTitle').innerText = 'Name: ' + productData.title;
            document.getElementById('modalDescription').innerText = 'Description: ' + productData.description;
            document.getElementById('modalRating').innerText = 'Rating: ' + productData.rating.rate;
            document.getElementById('modalPrice').innerText = 'Price: $' + productData.price;
            document.getElementById('modalWindow').style.display = 'block';
            }
        });
    });
});

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('modalWindow').style.display = 'none';
});

