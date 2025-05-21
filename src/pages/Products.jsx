import ProductsCard from "../components/ProductCards";
import newheadphone from '../assets/newheadphone.png'
const products = [
  {
    id: 1,
    name: 'Smart Speaker',
    price: '2999',
    image: newheadphone,
  },
  {
    id: 1,
    name: 'Smart Speaker',
    price: '2999',
    image: newheadphone,
  },
  {
    id: 1,
    name: 'Smart Speaker',
    price: '2999',
    image: newheadphone,
  },
  { id: 1,
    name: 'Smart Speaker',
    price: '2999',
    image: newheadphone},
    {id: 1,
    name: 'Smart Speaker',
    price: '2999',
    image: newheadphone},  
    {
    id: 2,
    name: 'Wireless Earbuds',
    price: '1999',
    image: newheadphone,
  },
  // Add more products here
];

const Products = () => {
  return (
    <section className="min-h-screen px-4 py-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-10 text-black">Our Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
    