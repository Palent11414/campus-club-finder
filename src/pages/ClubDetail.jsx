import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { clubs } from '../data/clubs';

export default function ClubDetail() {
  const { clubId } = useParams();
  const [isJoined, setIsJoined] = useState(false);
  
  const club = clubs.find(c => c.id === clubId);
  
  useEffect(() => {
    if (!club) return;
    
    // Check if club is already joined
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '{}');
    setIsJoined(!!joinedClubs[club.id]);
  }, [club]);

  if (!club) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Club not found</h2>
        <Link to="/clubs" className="text-blue-500 hover:underline">
          Back to all clubs
        </Link>
      </div>
    );
  }

  const handleJoinClub = () => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '{}');
    console.log("Button clicked!");
    joinedClubs[club.id] = true;
    localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
    setIsJoined(true);
    alert(`You've joined ${club.name}!`);
  };

  return (
    <div>
      <div className="mb-8">
        <Link to="/clubs" className="text-blue-500 hover:underline">
          &larr; Back to all clubs
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src={club.image} 
          alt={club.name} 
          className="w-full h-64 md:h-80 object-cover"
        />
        
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{club.name}</h2>
          <p className="text-gray-700 mb-6">{club.description}</p>
          
          {isJoined ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6">
              You have joined this club!
            </div>
          ) : (
            <button
              onClick={handleJoinClub}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300 mb-6"
            >
              Join Club
            </button>
          )}
          
          <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
          <ul className="space-y-3">
            {club.events.map((event, index) => (
              <li key={index} className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-bold">{event.name}</h4>
                <p className="text-gray-600">{new Date(event.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}