import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { slickSettings } from 'functions/slick';

const FeaturedProducts = ({ products }) => {
  return (
    <Div className='md:py-10'>
      <div className='container'>
        <h1 className='md:text-6xl text-2xl font-bold  pt-5 md:mb-5 text-yellow-900'>
          Our Featured Cakes
        </h1>
        <div className=' mb-5'>
          <div className='w-24 h-1 bg-yellow-900'></div>
        </div>
        <Slider {...slickSettings}>
          {products.map((product) => (
            <div
              key={product.id}
              className=' mb-5 shadow-lg transition duration-300 ease-in-out border-b-4 border-yellow-700  transform hover:-translate-y-1 hover:scale-105 '>
              <Link href={`/cakes/${product.slug}`}>
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
        </Slider>
      </div>
    </Div>
  );
};

export default FeaturedProducts;

const Div = styled.div`
  font-family: 'Playfair Display', serif;
  .slick-list {
    margin: 0 -10px;
  }
  .slick-slide > div {
    padding: 0 10px;
  }
`;
