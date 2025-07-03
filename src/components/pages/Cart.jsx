import { Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Cart = () => {
  const { cartItems, changeQuantity, removeFromCart } = useCart();
  const [coupon, setCoupon] = useState('');
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemove = (id, name) => {
    removeFromCart(id);
    toast.error(`${name} removed from cart`);
  };

  const handleCouponApply = () => {
    if (coupon.toLowerCase() === 'noir10') {
      toast.success('🎉 Coupon Applied: 10% OFF');
      // Frontend only – no real discount calculation
    } else {
      toast.error('Invalid Coupon Code');
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }
    navigate('/checkout');
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-black mb-10 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left: Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black">{item.name}</h3>
                  <p className="text-yellow-500 font-semibold text-sm mb-2">₹{item.price}</p>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => changeQuantity(item.id, 'dec')}
                      className="bg-gray-200 px-3 py-1 rounded text-black text-lg"
                    >
                      -
                    </button>
                    <span className="text-md font-medium">{item.quantity}</span>
                    <button
                      onClick={() => changeQuantity(item.id, 'inc')}
                      className="bg-gray-200 px-3 py-1 rounded text-black text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id, item.name)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 />
                </button>
              </div>
            ))}

            <Link
              to="/products"
              className="inline-block mt-4 text-yellow-500 hover:text-yellow-600 font-semibold transition"
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* Right: Summary */}
          <div className="bg-gray-50 rounded-lg shadow p-6 h-fit">
            <h2 className="text-xl font-bold text-black mb-6 border-b pb-3">Order Summary</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between font-bold text-black border-t pt-3">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            {/* Coupon Input */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-black mb-1">Have a Coupon?</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter coupon code"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-yellow-500"
                />
                <button
                  onClick={handleCouponApply}
                  className="bg-yellow-500 px-4 py-2 rounded text-black font-semibold hover:bg-yellow-400"
                >
                  Apply
                </button>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="mt-6 w-full bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-400 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
