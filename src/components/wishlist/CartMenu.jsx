import React from "react";

function CartMenu() {
  return (
    <div className="liton__wishlist-area mb-105">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="shoping-cart-inner">
              <div className="shoping-cart-table table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="cart-product-remove">x</td>
                      <td className="cart-product-image">
                        <a href="product-details.html">
                          <img src="assets/img/product/1.png" alt="#" />
                        </a>
                      </td>
                      <td className="cart-product-info">
                        <h4>
                          <a href="product-details.html">
                            Brake Conversion Kit
                          </a>
                        </h4>
                      </td>
                      <td className="cart-product-price">$85.00</td>
                      <td className="cart-product-stock">In Stock</td>
                      <td className="cart-product-add-cart">
                        <a
                          className="submit-button-1"
                          href="#"
                          title="Add to Cart"
                          data-bs-toggle="modal"
                          data-bs-target="#add_to_cart_modal"
                        >
                          Add to Cart
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="cart-product-remove">x</td>
                      <td className="cart-product-image">
                        <a href="product-details.html">
                          <img src="assets/img/product/2.png" alt="#" />
                        </a>
                      </td>
                      <td className="cart-product-info">
                        <h4>
                          <a href="product-details.html">
                            Shock Mount Insulator
                          </a>
                        </h4>
                      </td>
                      <td className="cart-product-price">$89.00</td>
                      <td className="cart-product-stock">In Stock</td>
                      <td className="cart-product-add-cart">
                        <a
                          className="submit-button-1"
                          href="#"
                          title="Add to Cart"
                          data-bs-toggle="modal"
                          data-bs-target="#add_to_cart_modal"
                        >
                          Add to Cart
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="cart-product-remove">x</td>
                      <td className="cart-product-image">
                        <a href="product-details.html">
                          <img src="assets/img/product/4.png" alt="#" />
                        </a>
                      </td>
                      <td className="cart-product-info">
                        <h4>
                          <a href="product-details.html">Tail Light Lens</a>
                        </h4>
                      </td>
                      <td className="cart-product-price">$149.00</td>
                      <td className="cart-product-stock">In Stock</td>
                      <td className="cart-product-add-cart">
                        <a
                          className="submit-button-1"
                          href="#"
                          title="Add to Cart"
                          data-bs-toggle="modal"
                          data-bs-target="#add_to_cart_modal"
                        >
                          Add to Cart
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartMenu;
