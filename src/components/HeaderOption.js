import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import './style/headerOption.css'

function HeaderOption({ avatar, Icon, title, onClick }) {

    const user = useSelector(selectUser);


    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className="headerOption_icon" />}
            {avatar && (
                <Avatar className='headerOption_icon' 
                // onError={(e) => {
                //     e.currentTarget.src = defaultImage;
                //   }} 
                  src={user?.photoUrl}>{user?.email[0]}</Avatar>
            )}
            <h3 className='headerOption_title'>{title}</h3>
        </div>
    )
}

export default HeaderOption
