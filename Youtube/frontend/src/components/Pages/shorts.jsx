import React from "react";

function Shorts() {
  const shorts = [];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Shorts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shorts.length === 0 && <div className="text-sm text-gray-600 dark:text-gray-300">No shorts available</div>}
        {shorts.map((item) => (
          <div key={item?.id?.videoId || item?.id} className="border rounded overflow-hidden dark:border-gray-700">
            {item?.snippet?.thumbnails?.medium?.url ? (
              <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} className="w-full" />
            ) : (
              <div className="w-full h-40 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">No image</div>
            )}
            <h3 className="p-2 text-sm">{item?.snippet?.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shorts;