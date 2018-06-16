import React, { Component } from 'react';
import './FeaturedPage.css';
import Navbar from '../../Components/Navbar/Navbar';

class FeaturedPage extends Component {
    render() {
        return (
            <div className="view-bg">
                <Navbar />
                <div className="section">
                    <LandingSquare />
                </div>
                <div className="section">
                    <PitchSection />
                </div>
            </div>
        );
    }
}

export default FeaturedPage;
