import Hero from '../components/layout/Hero';
import GenderCollectionSection from '../components/products/GenderCollectionSection';
import NewArrivalProducts from '../components/products/NewArrivalProducts';
import Productdetails from '../components/products/Productdetails';
import ProductGrid from '../components/products/ProductGrid';

const Home = () => {

  const placeholderProducts = [
    { _id: 1, name: "Leather Jacket", price: 89.99, image: "https://picsum.photos/id/1022/400/400" },
    { _id: 2, name: "Denim Jeans", price: 49.99, image: "https://picsum.photos/id/1023/400/400" },
    { _id: 3, name: "Denim Jeans", price: 49.99, image: "https://picsum.photos/id/1024/400/400" },
    { _id: 4, name: "Denim Jeans", price: 49.99, image: "https://picsum.photos/id/1035/400/400" },
    { _id: 5, name: "Denim Jeans", price: 49.99, image: "https://picsum.photos/id/1044/400/400" },
    { _id: 6, name: "Denim Jeans", price: 49.99, image: "https://picsum.photos/id/1033/400/400" },
    { _id: 7, name: "Denim Jeans", price: 49.99, image: "https://picsum.photos/id/1032/400/400" },
    { _id: 8, name: "Denim Jeans", price: 49.99, image: "https://picsum.photos/id/1031/400/400" },
  ];

  return (
    <div className="bg-gray-50">
      <Hero />

      <section className="mt-12">
        <GenderCollectionSection />
      </section>

      <section className="mt-12">
        <NewArrivalProducts />
      </section>

      <section className="mt-16 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl text-center text-gray-900 font-bold mb-8">
          Best Sellers
        </h1>
        <Productdetails />
      </section>

      <section className="mt-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl text-center text-gray-900 font-bold mb-8">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </section>
    </div>
  );
};

export default Home;
