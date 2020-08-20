
import { makeCartModal, chargeIt, showCartItems } from './modalDom.js';
import { makeCartDomModal } from './makeCartDom.js'
import { setCart } from './../helpers/data/cartData.js';

const makeTheDomModal = () => {
  makeCartModal();
  makeCartDomModal();
}

const addToCart = (array, index) => {
  const cartButton = $(`#cart-add-${index}`);

  cartButton.on("click", () => {
    setCart(array[index]);
    makeCartDomModal();


  });
};

export { addToCart, makeTheDomModal }

