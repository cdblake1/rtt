import React, { Component } from 'react';
import './HeaderInfo_DataContainer.css';
import HeaderInfo from '../../Components/ProfileHeader/HeaderInfo/HeaderInfo';

class HeaderInfo_DataContainer extends Component {
    render() {
        return (
            <div>
                <HeaderInfo label={this.props.label} data={this.fetchData()} />
            </div>
        );
    }

    fetchData() {
        //WILL CONNECT TO DB
        return this.props.endpoint;
    }
}

export default HeaderInfo_DataContainer;
