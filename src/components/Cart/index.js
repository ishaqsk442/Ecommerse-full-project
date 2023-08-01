import Header from '../Header'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'
import CartContext from '../../context/CartContext'
import CartSummary from '../CartSummery'

import './index.css'

const Cart = () => (
  <>
    <Header />

    <CartContext.Consumer>
      {value => {
        const {cartList, removeAllCartItems} = value

        const showEmpty = cartList.length

        const onClickRemoveAllBtn = () => {
          removeAllCartItems()
        }
        return (
          <>
            {showEmpty > 0 ? (
              <div className="cart-container">
                <div className="cart-content-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    className="remove-all-btn"
                    onClick={onClickRemoveAllBtn}
                  >
                    Remove All
                  </button>

                  <CartListView />
                  <CartSummary />
                </div>
              </div>
            ) : (
              <EmptyCartView />
            )}
          </>
        )
      }}
    </CartContext.Consumer>
  </>
)
export default Cart
