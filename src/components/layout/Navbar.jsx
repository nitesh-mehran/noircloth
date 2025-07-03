import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart } from 'react-feather';
import { useCart } from '../../context/CartContext';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-xl text-black">N</div>
            <span className="text-black font-extrabold text-2xl tracking-wide">NoirCloth</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-yellow-500 font-semibold border-b-2 border-yellow-500 pb-1'
                    : 'text-gray-700 hover:text-yellow-500 transition duration-300'
                }
              >
                {name}
              </NavLink>
            ))}

            <Link
              to="/cart"
              className="ml-4 text-gray-700 hover:text-yellow-500 relative"
            >
              <ShoppingCart size={24} />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full px-1.5">
                  {totalCount}
                </span>
              )}
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <Link
              to="/cart"
              className="mr-4 text-gray-700 hover:text-yellow-500 relative"
            >
              <ShoppingCart size={24} />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full px-1.5">
                  {totalCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-yellow-500"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-6 pt-2 pb-6 space-y-2 shadow">
          {NAV_ITEMS.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                (isActive
                  ? 'block text-yellow-500 font-semibold border-l-4 border-yellow-500 pl-3'
                  : 'block text-gray-700 hover:text-yellow-500 pl-3') + ' py-2'
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
