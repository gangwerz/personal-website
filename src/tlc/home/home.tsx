import React from 'react';

import Blog from './blog';

class Welcome extends React.Component {
    render() {
        return(
            <div>
                <h2>Welcome to my site!</h2>
                <Blog />
            </div>
        )
    }
}

export default Welcome;