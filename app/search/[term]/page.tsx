// Import necessary modules and components
import MoviesCarousel from '@/components/MoviesCarousel'; // Import MoviesCarousel component
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies'; // Import functions to fetch movies
import { notFound } from 'next/navigation'; // Import notFound function from next/navigation
import React from 'react'; // Import React

// Define the type for the props passed to the SearchPage component
type Props = {
    params: {
        term: string;
    }
}

// Define the SearchPage component as an asynchronous function
async function SearchPage({params: {term}} : Props) {
    // Redirect to the not found page if the search term is empty
    if(!term) notFound();

    // Decode the search term to handle special characters
    const termToUse = decodeURI(term);

    // Fetch movies based on the search term
    const movies = await getSearchedMovies(termToUse);
    
    // Fetch popular movies (may be used for a "You may also like" section)
    const popularMovies = await getPopularMovies();
    
    // Return the JSX for the SearchPage component
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
                {/* Display the search term in a heading */}
                <h2 className='text-6xl font-semibold px-10'>Results for {termToUse}</h2>
                {/* Render a MoviesCarousel component for the searched movies */}
                <MoviesCarousel title="Movies" movies={movies} isVertical />
                {/* Render a MoviesCarousel component for popular movies */}
                <MoviesCarousel title="You may also like" movies={popularMovies} />
            </div>
        </div>
    )
}

// Export the SearchPage component as the default export
export default SearchPage
