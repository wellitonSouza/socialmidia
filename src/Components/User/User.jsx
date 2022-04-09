import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStatus from './UserStatus';

export default function User(){
    return(
        <section className='container'>
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed />}/>
                <Route path="postar" element={<UserPhotoPost />}/>
                <Route path="estatisticas" element={<UserStatus />}/>
            </Routes>
        </section>
    )
}