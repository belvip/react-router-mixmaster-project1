import React from 'react';
import { Form } from 'react-router-dom';

export const action = async ({ request }) => {
    console.log(request);
    
    return null;
}

const Newsletter = () => {
    return (

        <Form className="form">
            <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>our newsletter</h4>

            {/* name */}
            <div className="form-row">
                <label htmlFor='name' className='form-label'>name</label>
                <input type='text' className='form-input' name='name' id='name' defaultValue="Belvinard" />
            </div>
            {/* lastName */}
            <div className="form-row">
                <label htmlFor='lastName' className='form-label'>last name</label>
                <input type='text' className='form-input' name='lastName' id='lastName' defaultValue="Pachinco" />
            </div>
            {/* name */}
            <div className="form-row">
                <label htmlFor='email' className='form-label'>email</label>
                <input type='text' className='form-input' name='email' id='email' defaultValue="pouadjeubelvi@gmail.com" />
            </div>
            <button type='submit' className='btn btn-block' style={{ marginTop: '0.5rem'}}>submit</button>
        </Form>
    )
}

export default Newsletter