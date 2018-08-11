import React, { Component } from 'react';
import './HeaderInfoSection.css';
import HeaderInfo_DataContainer from '../../../Containers/HeaderInfo_DataContainer/HeaderInfo_DataContainer';

class HeaderInfoSection extends Component {
    render() {
        return (
            <div>
                <HeaderInfo_DataContainer label="" endpoint="Caleb Blake" />
                <HeaderInfo_DataContainer label="sex" endpoint="Male" />
                <HeaderInfo_DataContainer label="age" endpoint="24" />
            </div>
        );
    }
}

export default HeaderInfoSection;
