import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './User.module.scss';

const User = () => {
    const {id} = useParams();
    const [user, setUser] =useState(null)
    const [loading, setLoading] =useState(true)

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res => {
            //console.log(res)
            setUser(res.data)
            setLoading(false)
        });
    }, []);

    const userDetail= loading ? (<div className={`${styles.loading}`}>로딩중...</div>):(
    <div className={`${styles.user}`}>
        <div className={`${styles.box}`}>
            <div className={`${styles.name}`}>이름:{user.name}</div>
            <div className={`${styles.email}`}>이메일: {user.email}</div>
            <div className={`${styles.phone}`}>연락처: {user.phone}</div>
            <div className={`${styles.website}`}>웹사이트: {user.website}</div>
        </div>
    </div>
    )

    return (
        <div>
            <h2 className={`${styles.h2}`}>User Info</h2>
            {userDetail}
        </div>
    );
};

export default User;