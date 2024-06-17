fetch('data.json')
.then(response => response.json())
.then(data => {
    const featuredItemsContainer = document.getElementById('featuredItemsContainer');
    
    data.featuredItems.forEach(item => {
        
        const featuredItem = document.createElement('div');
        featuredItem.classList.add('featured-item');
       
        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;

        const name = document.createElement('h2');
        name.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        const price = document.createElement('p');
        price.textContent = item.price;
        const button = document.createElement('button');
        button.textContent = 'add to cart';
        button.classList.add('my-button-class');  
        button.addEventListener('click', () => {
           
            localStorage.setItem('addcart', JSON.stringify(item));
window.location.href = 'Shopping_cart.html';
        });

        featuredItem.appendChild(image);
        featuredItem.appendChild(name);
        featuredItem.appendChild(description);
        featuredItem.appendChild(price); 
        featuredItem.appendChild(button);
     
        featuredItemsContainer.appendChild(featuredItem);

    });
})
.catch(error => console.error('Error loading featured items:', error));

