import React from 'react';
import './Menubar.css';

export const Menubar = (props) => {
    
    return (
        <div className='bg-primary text-white'>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 p-2"><h3>FakeStore</h3></div>
                    <div className="col-md-10 menu-container d-flex justify-content-end">
                        <li className='items me-4 p-2'>Home</li>
                        <li className='items me-4 p-2'>Contact</li>
                        <li className='items me-4 p-2'>Cart <sup className='text-white'>{props.count}</sup></li>
                        <li className='items me-4 p-2'>Login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

