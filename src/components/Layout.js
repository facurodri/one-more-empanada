import React from 'react';
import Navbar from './Navbar';


function Layout({ children, location }) {

    // useEffect(() => {
    //     if (location.hash) {
    //         const id = location.hash.substring(1);

    //         setTimeout(() => {
    //             const el = document.getElementById(id);
    //             if (el) {
    //                 el.scrollIntoView();
    //                 el.focus();
    //             }
    //         }, 0);
    //     }
    // })

    return (
        <div className="layout">
           <Navbar />
           <div className="content">
            {children}
           </div>
            <footer>
            <p> Copyright 2022 Una Mas </p>
            </footer>
        </div>
    )
}

export default Layout;
