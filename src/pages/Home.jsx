import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section className="bg-blue-700 text-white py-20 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Your Campus Community</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Find the perfect student club to match your interests and make new friends!
          </p>
          <Link 
            to="/clubs" 
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Browse Clubs
          </Link>
        </div>
      </section>
      
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Join a Club?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Student clubs are a great way to explore your interests, develop new skills, and connect with like-minded peers. 
            Our platform makes it easy to discover all the clubs your university has to offer.
          </p>
        </div>
      </section>
    </div>
  );
}