# RudraGauri Fun Mart

Welcome to RudraGauri Fun Mart, an eCommerce website built with HTML, CSS, and JavaScript. This project aims to provide a fully functional online store where users can browse products, add them to the cart, and proceed to checkout.

## Features

- Responsive design for all device sizes.
- Detailed product pages with images, descriptions, and prices.
- Add products to the cart and update quantities.
- Persistent cart using local storage.
- Checkout process simulation.

## Technologies Used

- **HTML5**: For the structure of the web pages.
- **CSS3**: For styling the web pages.
- **JavaScript**: For adding interactivity and functionality.
- **JSON**: For storing and retrieving product data.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/nikulvaviya/rudragauri-fun-mart-ecom-website.git
    ```

2. Navigate to the project directory:

    ```bash
    cd rudragauri-fun-mart
    ```

3. Open the `index.html` file in your web browser:

    ```bash
    open index.html
    ```

## Usage

Once you have the project set up, you can use the website as follows:

1. **Browse Products**: Navigate through the available products from different categories.
2. **Product Details**: Click on a product to view more details, including images, descriptions, and prices.
3. **Add to Cart**: Add products to your cart. You can view the cart at any time to see the selected products.
4. **Update Cart**: Modify the quantity of items in your cart.
5. **Checkout**: Proceed to the checkout to simulate a purchase process.

## Project Structure

Here's an overview of the project structure:

RUDRAGAURI-FUN-MART/
│ <br />
├── api/ <br />
│ └── products.json # JSON file containing product data <br />
│ <br />
├── public/ <br />
│ ├── Assets/ <br />
│ │ ├── Logo/ <br />
│ │ └── Products/ <br />
│ ├── Pages/ <br />
│ │ |── about.html <br />
│ │ |── addToCart.html <br />
│ │ |── contact.html <br />
│ │ └── products.html <br />
│ ├── Scripts/ <br />
│ │ ├── addTocart.js <br />
│ │ ├── fetchQuantityFromCartLS.js <br />
│ │ ├── footer.js <br />
│ │ ├── getCartProductFromLS.js <br />
│ │ ├── homeProductCards.js <br />
│ │ ├── homeQuantityToggle.js <br />
│ │ ├── incrementDecrement.js <br />
│ │ ├── removeProductFromCart.js <br />
│ │ ├── showAddToCartCards.js <br />
│ │ ├── showToast.js <br />
│ │ ├── updateCartProductTotal.js <br />
│ │ └── updateCartValue.js <br />
│ │ <br />
│ ├── .gitignore <br />
│ ├── index.html <br />
│ ├── main.js <br />
│ ├── package-lock.json <br />
│ ├── package.json <br />
│ └── style.css <br />
│ <br />
└── README.md <br />

Thank you for visiting RudraGauri Fun Mart! We hope you enjoy using our eCommerce website.
