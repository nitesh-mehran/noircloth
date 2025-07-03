import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 text-center">
      <CheckCircle2 className="w-16 h-16 mx-auto text-green-500 mb-6" />
      <h1 className="text-3xl font-bold text-black mb-4">Thank You!</h1>
      <p className="text-gray-600 mb-8">
        Your order has been placed successfully. We'll send you a confirmation email shortly.
      </p>
      <Link
        to="/products"
        className="inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-400 transition"
      >
        Continue Shopping
      </Link>
    </section>
  );
};

export default Success;
