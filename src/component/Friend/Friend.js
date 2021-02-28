import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';
import './Friend.css'

const Friend = () => {
    const [friends, setFriends] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddMember = (friend) =>{
        const newCart = [...cart, friend];
        setCart(newCart);
    } 

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=15')
            .then(res => res.json())
            .then(data => setFriends(data.results))
    }, [])
    return (
        <div className='All-section'>
            <div className='Friend-section'>
{
    friends.map(friend => <Profile handleAddMember = {handleAddMember} friend = {friend}></Profile>)
}
            </div>
            <div className='Cart-section'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Friend;