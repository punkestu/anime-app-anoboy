import Image from "next/image";

export default function AnimeList({ list, title, useMore, url }) {
  return (
    <section className="py-2 flex flex-col items-start">
      <h1 className="text-xl font-semibold border-b-2 mb-4">{title}</h1>
      {list && Array.isArray(list) && list.length > 0 ? (
        <div className="grid grid-cols-8 gap-4 w-full">
          {list.map((item, index) => (
            <a
              key={index}
              href={`/anime/${item.id}`}
              className="flex items-center justify-center gap-4 border-b border-gray-200 aspect-square relative"
            >
              <div className="bg-gray-50 bg-opacity-45 w-full h-full absolute animate-pulse"></div>
              <Image
                width={100}
                height={100}
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="w-full h-full absolute p-4 opacity-0 hover:opacity-100 bg-gray-100 bg-opacity-50 text-black flex items-center justify-center duration-300">
                <h1 className="text-xl font-semibold">{item.title}</h1>
              </div>
            </a>
          ))}
          {useMore && (
            <a
              href={`/${url}`}
              className="flex items-center justify-center gap-4 border-b border-gray-200 aspect-square relative"
            >
              <div className="w-full h-full absolute p-4 bg-gray-100 bg-opacity-50 text-black flex items-center justify-center">
                <h1 className="text-xl font-semibold">More ...</h1>
              </div>
            </a>
          )}
        </div>
      ) : (
        <h1>Empty List</h1>
      )}
    </section>
  );
}
