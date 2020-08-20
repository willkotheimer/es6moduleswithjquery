

import { cartTotal } from './../components/cartTotal.js';
import { makeCartModal } from './modalDom.js';


const makeCartDomModal = () => {
    $("#cart").html(` 
        
        <i class="fas fa-shopping-cart cart"></i>
          <div id="cart-stuff">
            <h3>My Cart</h3>
            <div id="cart-thumb"></div>
            <div id="cart-price">
              <div>$${cartTotal().toFixed(2)}</div>
            </div>
              <button class="btn btn-danger" data-toggle="modal" data-target="#buy-modal" id="checkout">Checkout</button>
          </div>`);

    $('#checkout').click(makeCartModal);

}

export { makeCartDomModal }