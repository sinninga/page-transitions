import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return(
            <div className="banner-container">
                <div className="banner-text ptext">
                    <span className="border">
                        Parallax Website
                    </span>
                </div>
            </div>
        );
    }
}

export default Banner;