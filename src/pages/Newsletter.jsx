import React from 'react';
import { Form, redirect, useNavigation } from 'react-router-dom'; // Import necessary components and hooks from react-router-dom
import axios from 'axios'; // Axios is used for sending HTTP requests
import { toast } from 'react-toastify'; // Toast is used for showing success/error notifications

// URL of the API endpoint for submitting the newsletter form
const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

// This is an async function (action) to handle form submission in React Router.
export const action = async ({ request }) => {
    // Extract form data from the request object
    const formData = await request.formData();
    // Convert form data into a regular object (key-value pairs)
    const data = Object.fromEntries(formData);

    try {
        // Send a POST request to the API with the form data
        const response = await axios.post(newsletterUrl, data);

        // Show a success toast message with the response message from the API
        toast.success(response.data.msg);
        
        // Redirect the user to the home page (or another route) after successful submission
        return redirect('/');
    } catch (error) {
        // Log the error to the console for debugging
        console.log(error);

        // Show an error toast message with the error message from the API (if available)
        toast.error(error?.response?.data?.msg);

        // Return the error object so it can be handled by the caller if needed
        return error;
    }
};

// React component for rendering the newsletter subscription form
const Newsletter = () => {
    // Get the current state of the form submission using useNavigation hook
    const navigation = useNavigation();
    // Check if the form is in the "submitting" state (in progress)
    const isSubmitting = navigation.state === 'submitting';

    return (
        // Form element that will send a POST request when submitted
        <Form className="form" method="POST">
            {/* Header for the form */}
            <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>our newsletter</h4>

            {/* Name input field */}
            <div className="form-row">
                <label htmlFor='name' className='form-label'>name</label>
                <input type='text' className='form-input' name='name' id='name' required />
            </div>

            {/* Last name input field */}
            <div className="form-row">
                <label htmlFor='lastName' className='form-label'>last name</label>
                <input type='text' className='form-input' name='lastName' id='lastName' required />
            </div>

            {/* Email input field with default value */}
            <div className="form-row">
                <label htmlFor='email' className='form-label'>email</label>
                <input type='text' className='form-input' name='email' id='email' defaultValue='test@test.com' />
            </div>

            {/* Submit button that will be disabled while the form is being submitted */}
            <button type='submit' className='btn btn-block' 
                style={{ marginTop: '0.5rem'}} disabled={isSubmitting}>

                {/* If the form is submitting, show "submitting", otherwise show "submit" */}
                {isSubmitting ? 'submitting' : 'submit'}
            </button>
        </Form>
    )
}

export default Newsletter; // Export the Newsletter component as the default export
