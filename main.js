import './style.css'
import products from "./api/products.json"
import { showProductContainer } from './public/Scripts/homeProductCards';

//* Call the Function to Display all the Products as a Card
showProductContainer(products);