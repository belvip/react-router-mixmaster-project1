import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
import { useQuery } from '@tanstack/react-query';


export const loader = async () => {
    const searchTerm = 'a'
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
    console.log(response);
    
    return {drinks: response.data.drinks, searchTerm};
}


const Landing = () => {
    const { drinks, searchTerm} = useLoaderData();
    console.log(drinks); 
    
    return (
        <>
            <SearchForm />
            <CocktailList drinks={drinks}/>
        </>
        
    );
}

export default Landing