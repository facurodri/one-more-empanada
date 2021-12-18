import React from 'react';

function Layout({ children }) {
    return (
        <div>
            <h1>Hello, I'm Always Here</h1>
            {children}
            <h2>and I am always here</h2>
        </div>
    )
}

export default Layout;
