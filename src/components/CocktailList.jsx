// Import necessary libraries and components
import React from 'react' // Import React to create the component
import Wrapper from '../assets/wrappers/CocktailList'; // Import a styled component wrapper for the cocktail list
import CocktailCard from './CocktailCard'; // Import the CocktailCard component to display each individual cocktail

// Define the CocktailList component that receives 'drinks' as a prop
const CocktailList = ({ drinks }) => {

    // If there are no drinks available, display a message to the user
    if (!drinks) {
        return (
            <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4> // Display a centered message if no drinks match the search
        );
    }

    // Map through the drinks array and format the drink data
    const formattedDrinks = drinks.map((item) => {
        // Destructure relevant properties from each drink object
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strCategory, strGlass, strInstruction } = item;

        // Return a new object with the properties we need for each drink
        return {
            id: idDrink, // ID of the drink
            name: strDrink, // Name of the drink
            image: strDrinkThumb, // Image of the drink
            category:strCategory,
            info: strAlcoholic, // Alcoholic or non-alcoholic information
            glass: strGlass, // Type of glass used for the drink
            instructions: strInstruction,
        }
    });

    // Return the JSX that renders the list of cocktails
    return (
        <Wrapper> {/* Wrapper component for styling the list */}

            {/* Loop through the formatted drinks array and render a CocktailCard for each item */}
            {formattedDrinks.map((item) => {
                return <CocktailCard key={item.id} {...item} /> // Pass each drink's data as props to the CocktailCard component
            })}

        </Wrapper>
    )
}

// Export the CocktailList component to be used in other parts of the application
export default CocktailList;
