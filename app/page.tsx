// Import necessary modules and components
import Image from 'next/image';
import MoviesCarousel from '@/components/MoviesCarousel';
import { getUpcomingMovies, getPopularMovies, getTopRatedMovies } from '@/lib/getMovies';
import CarouselBannerWrapper from '@/components/CarouselBannerWrapper';

// Define the Home component as an asynchronous function
export default async function Home() {
  
  // Fetch data for upcoming, top-rated, and popular movies
  const upComingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main>
      
      {/* CarouselBannerWrapper component */}
      <CarouselBannerWrapper />

      {/* Container for the movie carousels */}
      <div className='flex flex-col space-y-2 xl:-mt-48'>
        {/* MoviesCarousel component for upcoming movies */}
        <MoviesCarousel movies={upComingMovies} title="Upcoming" />
        
        {/* MoviesCarousel component for top-rated movies */}
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        
        {/* MoviesCarousel component for popular movies */}
        <MoviesCarousel movies={popularMovies} title="Popular" />
        
        {/* Uncomment below lines if needed */}
        {/* <MoviesCarousel for top rated movie /> */}
        {/* <MoviesCarousel for popular movie /> */}
      </div>
    </main>
  )
};
