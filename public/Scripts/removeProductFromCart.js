import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id) => {
  let cartProducts = getCartProductFromLS();
  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

  //$ =//=| Update the localStorage after removing the item.
  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  //$ =//=| Removing the Div by Clicking on the Remove Button.
  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();

    //$ =//=| Showing the Toast(Pop-up) when the product is removed from the cart
    showToast("delete", id);
  }

  updateCartValue(cartProducts);
};
