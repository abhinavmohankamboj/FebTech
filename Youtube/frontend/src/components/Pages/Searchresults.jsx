import React from "react";
import { useParams } from "react-router-dom";

function SearchResults() {
  const { query } = useParams();
  const results = [];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Search Results for "{query}"</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map(item => (
          <div key={item.id.videoId || item.id} className="border rounded overflow-hidden dark:border-gray-700">
            <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} className="w-full" />
            <h3 className="p-2 text-sm">{item.snippet.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;