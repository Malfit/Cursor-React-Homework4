import React from 'react'
import {FiHeart, MdCreate, FiUpload, FiShare2} from 'react-icons/all';

import './AdditionalBar.css';

const AdditionalBar = () => {

    return(
        <div className = "postAdditionalBar">
            <ul className="barList">
                <li><MdCreate/>  482</li>
                <li><FiShare2/>  146</li>
                <li><FiHeart/>  887</li>
                <li><FiUpload/></li>
            </ul>                   
        </div>
    )
}

export default AdditionalBar;