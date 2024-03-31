import React from "react";

function ShopCart() {
  return (
    <div className="liton__shoping-cart-area mb-120">
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
                      <td className="cart-product-price">$149.00</td>
                      <td className="cart-product-quantity">
                        <div className="cart-plus-minus">
                          <input
                            type="text"
                            value="02"
                            name="qtybutton"
                            className="cart-plus-minus-box"
                          />
                        </div>
                      </td>
                      <td className="cart-product-subtotal">$298.00</td>
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
                          <a href="product-details.html">OE Replica Wheels</a>
                        </h4>
                      </td>
                      <td className="cart-product-price">$85.00</td>
                      <td className="cart-product-quantity">
                        <div className="cart-plus-minus">
                          <input
                            type="text"
                            value="02"
                            name="qtybutton"
                            className="cart-plus-minus-box"
                          />
                        </div>
                      </td>
                      <td className="cart-product-subtotal">$170.00</td>
                    </tr>
                    <tr>
                      <td className="cart-product-remove">x</td>
                      <td className="cart-product-image">
                        <a href="product-details.html">
                          <img src="assets/img/product/3.png" alt="#" />
                        </a>
                      </td>
                      <td className="cart-product-info">
                        <h4>
                          <a href="product-details.html">
                            Wheel Bearing Retainer
                          </a>
                        </h4>
                      </td>
                      <td className="cart-product-price">$75.00</td>
                      <td className="cart-product-quantity">
                        <div className="cart-plus-minus">
                          <input
                            type="text"
                            value="02"
                            name="qtybutton"
                            className="cart-plus-minus-box"
                          />
                        </div>
                      </td>
                      <td className="cart-product-subtotal">$150.00</td>
                    </tr>
                    <tr className="cart-coupon-row">
                      <td colspan="6">
                        <div className="cart-coupon">
                          <input
                            type="text"
                            name="cart-coupon"
                            placeholder="Coupon code"
                          />
                          <button
                            type="submit"
                            className="btn theme-btn-2 btn-effect-2"
                          >
                            Apply Coupon
                          </button>
                        </div>
                      </td>
                      <td>
                        <button
                          type="submit"
                          className="btn theme-btn-2 btn-effect-2-- disabled"
                        >
                          Update Cart
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="shoping-cart-total mt-50">
                <h4>Cart Totals</h4>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td>$618.00</td>
                    </tr>
                    <tr>
                      <td>Shipping and Handing</td>
                      <td>$15.00</td>
                    </tr>
                    <tr>
                      <td>Vat</td>
                      <td>$00.00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Order Total</strong>
                      </td>
                      <td>
                        <strong>$633.00</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="btn-wrapper text-right">
                  <a
                    href="checkout.html"
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    Proceed to checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCart;
