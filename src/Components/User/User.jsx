import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Feed from '../Feed/Feed';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStatus from './UserStatus';

export default function User(){
    const { data } = React.useContext(UserContext)
    return(
        <section className='container'>
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id}/>}/>
                <Route path="postar" element={<UserPhotoPost />}/>
                <Route path="estatisticas" element={<UserStatus />}/>
            </Routes>
        </section>
    )
}