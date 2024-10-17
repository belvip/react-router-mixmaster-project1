import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { useQuery } from '@tanstack/react-query'

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchCocktailsQuery = (searchTerm) => {
    return {
        queryKey: ['search', searchTerm || 'all'],
        queryFn: async () =>{
            const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
            return response.data.drinks;
        }
    }
}

// Loader function to fetch drinks based on the search term
export const loader = async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || 'p'; 
    
    return { searchTerm };
};

// Landing page component
const Landing = () => {
    const { searchTerm } = useLoaderData(); // Get data from loader
    const { data:drinks, isLoading} = useQuery(
        searchCocktailsQuery(searchTerm)
    );

    if(isLoading) return <h4>Loading...</h4>

    return (
        
        <>
            {/* Render the search form */}
            <SearchForm searchTerm={searchTerm} />
            
            {/* Render the list of cocktails */}
            <CocktailList drinks={drinks} />
        </>
    );
};

export default Landing;
