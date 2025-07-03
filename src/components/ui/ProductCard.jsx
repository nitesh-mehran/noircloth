import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover"
          loading="lazy"
        />
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-black mb-1">{product.name}</h3>
        <p className="text-yellow-500 font-semibold text-base mb-2">
          ₹{product.price}
        </p>
        <p className="text-gray-600 text-sm flex-grow">
          {product.description.slice(0, 60)}...
        </p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-yellow-500 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition flex items-center justify-center gap-2"
        >
          <ShoppingCart size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
