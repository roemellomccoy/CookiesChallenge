import { useState, useEffect } from 'react'

const HeaderUserInfo = () => {

    const [username, setUsername] = useState('Some User');

    useEffect(() => {
        const getUsernameAsync = async () => {
            await fetch('http://localhost:5000/api/username', {credentials: 'include'});
            setUsername(username);
        }
        getUsernameAsync();
    }, [username]);

    return (
        <>
            Signed in as: <a href="#login">{username}</a>
        </>
    )
}

export default HeaderUserInfo
