import React, { useEffect } from 'react';

function Layout({ children, location }) {
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);

            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView();
                    el.focus();
                }
            }, 0);
        }
    })
    return (
        <div>
            <h1>Hello, I'm Always Here</h1>
            {children}
            <h2>and I am always here</h2>
        </div>
    )
}

export default Layout;
