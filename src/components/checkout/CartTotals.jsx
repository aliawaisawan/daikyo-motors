import React from "react";

function CartTotals() {
  return (
    <div className="col-lg-6">
      <div className="shoping-cart-total mt-50">
        <h4 className="title-2">Cart Totals</h4>
        <table className="table">
          <tbody>
            <tr>
              <td>
                Brake Conversion Kit <strong>× 2</strong>
              </td>
              <td>$298.00</td>
            </tr>
            <tr>
              <td>
                OE Replica Wheels <strong>× 2</strong>
              </td>
              <td>$170.00</td>
            </tr>
            <tr>
              <td>
                Wheel Bearing Retainer <strong>× 2</strong>
              </td>
              <td>$150.00</td>
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
      </div>
    </div>
  );
}

export default CartTotals;
