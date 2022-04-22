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
           
             <h1>Hello, -</h1>
            {children}
            <footer>and I am always here(footer) </footer>
        </div>
    )
}

export default Layout;
