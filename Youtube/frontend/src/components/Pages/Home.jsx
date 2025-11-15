import React from "react";

function Home({ selectedCategory = "all" }) {
  const items = [];
  const exploreItems = [];

  const filterByCategory = (arr) => {
    if (!arr) return [];
    if (!selectedCategory || selectedCategory === "all") return arr;
    return arr.filter((it) => it.category === selectedCategory);
  };

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-xl font-bold mb-4">Trending & Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterByCategory(items).length === 0 && (
            <div className="text-sm text-gray-600 dark:text-gray-300">No trending videos</div>
          )}
          {filterByCategory(items).map((item) => {
            const thumb = item?.snippet?.thumbnails?.medium?.url || "";
            return (
              <div key={item?.id?.videoId || item?.id} className="border rounded overflow-hidden dark:border-gray-700">
                {thumb ? (
                  <img src={thumb} alt={item?.snippet?.title} className="w-full" />
                ) : (
                  <div className="w-full h-40 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                    No image
                  </div>
                )}
                <h3 className="p-2 text-sm">{item?.snippet?.title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Explore, Playlists & Community Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {exploreItems.length === 0 && (
            <div className="text-sm text-gray-600 dark:text-gray-300">No explore items</div>
          )}
          {exploreItems.map((item) => {
            const thumb = item?.snippet?.thumbnails?.medium?.url || "";
            return (
              <div key={item?.id?.channelId || item?.id} className="border rounded overflow-hidden dark:border-gray-700">
                {thumb ? (
                  <img src={thumb} alt={item?.snippet?.title} className="w-full" />
                ) : (
                  <div className="w-full h-40 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                    No image
                  </div>
                )}
                <h3 className="p-2 text-sm">{item?.snippet?.title}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;