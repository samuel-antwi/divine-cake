import Image from 'next/image';

const Chefs = ({ chefs }) => {
  return (
    <div className='bg-gray-900 text-white py-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='md:grid md:grid-cols-3 px-6 gap-10'>
          <div className='mb-10 border py-10 md:shadow-lg px-5 lg:px-8'>
            <h1 className='font-title md:text-3xl text-2xl mb-5 font-bold'>Meet Our Chefs</h1>
            <p className='text-gray-400 text-lg'>
              We have awesome chef in our team. We are also always looking for new people to join
              our team. Our chef know their stuff very well.
            </p>
          </div>
          {chefs.map((chef) => (
            <div
              className='shadow-lg bg-gray-800 border transform hover:scale-110 mb-10  duration-300'
              key={chef.id}>
              <Image className='object-cover' src={chef.image.url} width={600} height={400} />
              <div className=' py-3 text-center'>
                <p className='font-title text-xl mb-2 font-semibold'>{chef.name}</p>
                <i className='text-gray-400 capitalize'>{chef.title}</i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;
