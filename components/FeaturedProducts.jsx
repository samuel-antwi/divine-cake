import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
const FeaturedProducts = ({ products }) => {
  console.log(products);
  return (
    <Div className='md:py-10'>
      <div className='container'>
        <h1 className='md:text-6xl text-2xl font-bold  pt-5 md:mb-5 text-yellow-900'>
          Our Featured Products
        </h1>
        <div className=' mb-5'>
          <div className='w-24 h-1 bg-yellow-900'></div>
        </div>
        <div className='md:grid md:grid-cols-2 xl:grid-cols-4 gap-5'>
          {products.map((product) => (
            <div
              key={product.id}
              className='col-span-1 mb-5 shadow-lg transition duration-300 ease-in-out  transform hover:-translate-y-1 hover:scale-105 '>
              <Link href={`/cakes/${product.slug}`} className='col-span-1'>
                <a>
                  <Image
                    src={product.image.url}
                    width={500}
                    height={400}
                    layout='responsive'
                  />
                </a>
              </Link>
              <p className='py-6 font-bold text-xl text-yellow-800 text-center'>
                {product.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Div>
  );
};

export default FeaturedProducts;

const Div = styled.div`
  font-family: 'Playfair Display', serif;
`;
