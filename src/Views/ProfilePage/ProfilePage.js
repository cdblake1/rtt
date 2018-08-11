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
                <div className="container profile-container">
                    <div className="row profile-section">
                        <ProfileHeader />
                        <ProfileRow title="First Name" />
                        <ProfileRow title="Last Name" />
                    </div>
                    <div className="row">
                        <ProfileRow title="First Name" />
                        <ProfileRow title="First Name" />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
