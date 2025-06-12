export default function ViewToggle({ viewMode, setViewMode }) {
  return (
    <div className="mb-6 flex space-x-2">
      <button
        onClick={() => setViewMode('grid')}
        className={`px-4 py-2 rounded-md ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        Grid View
      </button>
      <button
        onClick={() => setViewMode('list')}
        className={`px-4 py-2 rounded-md ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        List View
      </button>
    </div>
  );
}