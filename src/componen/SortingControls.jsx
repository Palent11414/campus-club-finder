export default function SortingControls({ sortOption, setSortOption }) {
  return (
    <div className="mb-6">
      <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="block w-full md:w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
      </select>
    </div>
  );
}