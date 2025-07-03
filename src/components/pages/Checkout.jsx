import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import {
  Wallet,
  CreditCard,
  HandCoins,
  ShieldCheck,
  Truck
} from 'lucide-react';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const validateForm = () => {
    const { name, email, address, city, zip } = form;
    if (!name || !email || !address || !city || !zip) {
      toast.error('Please fill all fields');
      return false;
    }
    return true;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;
    if (paymentMethod === 'COD') {
      processOrder();
    } else {
      setShowModal(true);
    }
  };

  const processOrder = () => {
    toast.info('Processing payment...');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(false);
      toast.success('Order placed successfully!');
      clearCart();
      navigate('/success');
    }, 2000);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 relative">
      <h1 className="text-3xl font-bold text-black mb-10 text-center">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Address Form */}
        <div className="md:col-span-2 space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border p-3 rounded" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input type="email" placeholder="Email" className="w-full border p-3 rounded" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <textarea placeholder="Address" rows="3" className="w-full border p-3 rounded" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
          <div className="flex gap-4">
            <input type="text" placeholder="City" className="w-1/2 border p-3 rounded" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
            <input type="text" placeholder="ZIP" className="w-1/2 border p-3 rounded" value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value })} />
          </div>

          {/* Payment Method */}
          <div className="mt-6 border-t pt-4">
            <h3 className="font-semibold mb-2 text-black">Select Payment Method</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" value="UPI" checked={paymentMethod === 'UPI'} onChange={(e) => setPaymentMethod(e.target.value)} />
                <Wallet className="w-4 h-4" /> UPI / Wallet
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" value="Card" checked={paymentMethod === 'Card'} onChange={(e) => setPaymentMethod(e.target.value)} />
                <CreditCard className="w-4 h-4" /> Credit / Debit Card
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" value="COD" checked={paymentMethod === 'COD'} onChange={(e) => setPaymentMethod(e.target.value)} />
                <HandCoins className="w-4 h-4" /> Cash on Delivery (COD)
              </label>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gray-50 rounded-lg shadow p-6 h-fit">
          <h2 className="text-xl font-bold text-black mb-6 border-b pb-3">Order Summary</h2>
          <div className="text-gray-700 text-sm space-y-3">
            <div className="flex justify-between">
              <span>Items</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-black">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
          <button onClick={handlePlaceOrder} disabled={loading} className="mt-6 w-full bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-400 transition">
            {loading ? 'Processing...' : 'Place Order'}
          </button>

          {/* Trust Icons */}
          <div className="mt-6 border-t pt-4 space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              100% Secure Payment
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-blue-500" />
              Fast & Free Delivery
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-black">Payment — {paymentMethod}</h2>

            {paymentMethod === 'UPI' ? (
              <div className="text-center space-y-4">
                <img
                  src="/images/image.png"
                  alt="QR Code"
                  className="w-48 mx-auto border"
                />
                <p className="text-gray-600 text-sm">Scan this QR using PhonePe / GPay</p>
              </div>
            ) : (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border p-3 rounded"
                  value={cardDetails.number}
                  onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 border p-3 rounded"
                    value={cardDetails.expiry}
                    onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 border p-3 rounded"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                  />
                </div>
              </div>
            )}

            <div className="flex justify-end mt-6 gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 text-black rounded"
              >
                Cancel
              </button>
              <button
                onClick={processOrder}
                className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Checkout;
