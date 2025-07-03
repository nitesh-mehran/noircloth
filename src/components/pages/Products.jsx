import products from '../../../data/products';
import ProductCard from '../ui/ProductCard';

const Products = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
      <h2 className="text-4xl font-extrabold mb-10 text-black text-center">Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
