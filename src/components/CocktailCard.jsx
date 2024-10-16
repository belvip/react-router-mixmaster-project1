// Importing React and necessary modules
import React from 'react';
// Importing Link from react-router-dom to enable navigation between pages
import { Link, useOutletContext } from 'react-router-dom';
// Importing the styled Wrapper component for CSS styling
import Wrapper from '../assets/wrappers/CocktailCard';

// Defining the CocktailCard component with destructured props (image, name, id, info, glass)
const CocktailCard = ({ image, name, id, info, glass }) => {
    const data = useOutletContext();
    console.log(data);
    
    return (
        // Using Wrapper for applying custom styles to the component
        <Wrapper>
            {/* Image container for displaying the cocktail image */}
            <div className='img-container'>
                {/* Rendering the image with alt text based on the cocktail's name */}
                <img src={image} alt={name} className='img' />
            </div>

            {/* Footer section displaying cocktail name, glass type, info, and a link to details */}
            <div className="footer">
                {/* Displaying the cocktail name */}
                <h4>{name}</h4>
                {/* Displaying the type of glass used for the cocktail */}
                <h5>{glass}</h5>
                {/* Displaying additional info about the cocktail */}
                <p>{info}</p>
                {/* Link to the detailed page of the cocktail using its id */}
                <Link to={`/cocktail/${id}`} className='btn'>details</Link>
            </div>
        </Wrapper>
    );
};

// Exporting the CocktailCard component to be used in other parts of the application
export default CocktailCard;
