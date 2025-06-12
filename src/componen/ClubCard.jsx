import { Link } from 'react-router-dom';

export default function ClubCard({ club, viewMode }) {
  return (
    <div className={`${viewMode === 'grid' ? 'w-full md:w-1/2 lg:w-1/3 p-4' : 'w-full mb-6'}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img 
          src={club.image} 
          alt={club.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{club.name}</h3>
          <p className="text-gray-600 mb-4">{club.shortDescription}</p>
          <Link 
            to={`/clubs/${club.id}`}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}