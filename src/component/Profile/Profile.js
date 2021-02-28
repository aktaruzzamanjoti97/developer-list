import './Profile.css';

import React from 'react';

const Profile = (props) => {
    // console.log(props);
    const {picture, name, email, location, phone, dob} = props.friend;
    return (
        <div className='Profile-flex'>
            <div className='Profile-class'>
                <img src={picture.large} alt=""/>
            </div>
            <div className='Profile-details'>
            <h2>{name.first + " " + name.last}</h2>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Location: {location.city+", "+location.country}</p>
                {/* <p>Age: {dob.age}</p> */}
                <h4>Salary:  ${location.street.number}/per month </h4>
                <button onClick={() => props.handleAddMember(props.friend)} className="Hire-button">Hire Me</button>
            </div>
        </div>
    );
};

export default Profile;