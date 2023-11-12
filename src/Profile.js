import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Container from './Container';


const Profile = () => {
    useEffect(() => {
        checkUser()
    }, [])

    const [user, setUser] = useState({})

    const checkUser = async() => {
        try {
            const data = await Auth.currentUserPoolUser()
            const userInfo = { username: data.username, ...data.attributes}
            setUser(userInfo)
        } catch (err) { console.error('error: ', err)}
    }
    return (
        <Container>
            <Authenticator>
            {({ signOut, userInfo }) => (
                <main>
                    <h1>Profile</h1>
                    <h2>Username: {user.username}</h2>
                    <h3>Email: {user.email}</h3>
                    <button onClick={signOut}>Sign out</button>
                </main>
            )}
            </Authenticator>
        </Container>
    );
};
export default Profile;