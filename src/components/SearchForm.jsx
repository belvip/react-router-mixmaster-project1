import React from 'react';
import Wrapper from '../assets/wrappers/SearchForm';
import { Form, useNavigation } from 'react-router-dom';

const SearchForm = ({ searchTerm }) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <Wrapper>
            {/* Form for searching */}
            <Form className="form">
                <input
                    type="search"
                    name="search"
                    className="form-input"
                    defaultValue={searchTerm} // Use searchTerm prop as default value
                    placeholder="Search for a cocktail..."
                />
                <button type="submit" className="btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Searching...' : 'Search'}
                </button>
            </Form>
        </Wrapper>
    );
};

export default SearchForm;
