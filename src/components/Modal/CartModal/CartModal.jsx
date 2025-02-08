import "./CartModal.css";

const CartModal = ({ isOpen, onClose, cartItems }) => {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="cart-modal">
          <div className="cart-modal__header">
            <h2>Кошик</h2>
            <button className="cart-modal__close" onClick={onClose}>
              ✕
            </button>
          </div>

          <div className="cart-modal__content">
            {cartItems?.length ? (
              cartItems.map((item) => (
                <div key={item.id}>{/* Вміст кошика */}</div>
              ))
            ) : (
              <div className="cart-modal__empty">Ваш кошик порожній</div>
            )}
          </div>

          <div className="cart-modal__footer">
            <div className="cart-modal__total">
              <span>Всього:</span>
              <span>0 ₴</span>
            </div>
            <button
              className="cart-modal__checkout"
              disabled={!cartItems?.length}
            >
              Оформити замовлення
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
