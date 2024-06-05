// Import necessary modules and components
import React from 'react';
import { getDiscoverMovies } from '@/lib/getMovies'; // Import function to fetch movies
import MoviesCarousel from '@/components/MoviesCarousel'; // Import MoviesCarousel component

// Define the type for the props passed to the GenrePage component
type Props = {
    params: {
        id: string;
    },
    searchParams: {
        genre: string;
    }
}

// Define the GenrePage component as an asynchronous function
async function GenrePage({ params: { id }, searchParams: {genre}}: Props) {
  // Fetch movies based on the genre id
  const movies = await getDiscoverMovies(id);

  return (
    <div className='max-w-7xl mx-auto'>
     
     {/* Container for the movie carousel */}
     <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
      {/* Display the genre title */}
      <h1 className='text-6xl font-semibold px-10'>Results for {genre}</h1>
      {/* Render the MoviesCarousel component */}
      <MoviesCarousel title={`Genre`} movies={movies} isVertical />
     </div>
    </div>
  )
}

// Export the GenrePage component as the default export
export default GenrePage
