import React, { Component } from 'react';
import './ProfilePage.css';
import Navbar from '../../Components/Navbar/Navbar';
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader';
import ProfileRow from '../../Components/ProfileRow/ProfileRow';

class ProfilePage extends Component {
    render() {
        return (
            <div className="view-bg">
                <Navbar />
                <div className="container profile-section">
                    <div className="row">
                        <ProfileHeader />
                        <ProfileRow />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
