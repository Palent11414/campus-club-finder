import { useState, useEffect } from 'react';
import { clubs } from '../data/clubs';
import ClubCard from '../componen/ClubCard';
import SortingControls from '../componen/SortingControls';
import ViewToggle from '../componen/ViewToggle';

export default function ClubList() {
  const [sortOption, setSortOption] = useState('name-asc');
  const [viewMode, setViewMode] = useState('grid');
  const [sortedClubs, setSortedClubs] = useState([...clubs]);

  useEffect(() => {
    const sorted = [...clubs].sort((a, b) => {
      if (sortOption === 'name-asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setSortedClubs(sorted);
  }, [sortOption]);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
        <h2 className="text-3xl font-bold mb-4 md:mb-0">All Clubs</h2>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <SortingControls sortOption={sortOption} setSortOption={setSortOption} />
          <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
        </div>
      </div>
      
      <div className={`flex ${viewMode === 'grid' ? 'flex-wrap -mx-4' : 'flex-col'}`}>
        {sortedClubs.map(club => (
          <ClubCard key={club.id} club={club} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
}