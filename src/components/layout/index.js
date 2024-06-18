// Layout
import React from 'react';
import Header from './header';

const Layout = ({children}) => {
    return (
        <React.Fragment>

            <div className="cf_layout">

                {/* Header */}
                <Header />

                {/* Content */}
                <div className="cf_content">
                    {children}
                </div>
            </div>

        </React.Fragment>
    )
}

export default Layout;