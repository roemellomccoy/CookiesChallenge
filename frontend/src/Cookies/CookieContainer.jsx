import { useState, useEffect } from 'react'
import { Card, Col, Button, ListGroupItem } from 'react-bootstrap';

const CookieContainer = () => {
    const api = 'http://localhost:5000/api'
    const [cookies, setCookies] = useState([]);

    useEffect(() => {
        const getCookiesAsync = async () => {
            const response = await fetch(`${api}/cookies`,
                { credentials: 'include' });
            const cookies = await response.json();
            setCookies(cookies);
        }
        getCookiesAsync();
    })

    const addRandomCookie = async () => {
        await fetch(`${api}/cookies/random`, {credentials: 'include', method: 'post'})
    }

    const updateUsernameCookie = async () => {
        await fetch(`${api}/cookies/username`, {credentials: 'include', method: 'put'})
    };

    const deleteUsernameCookie = async () => {
        await fetch(`${api}/cookies/username`, {credentials: 'include', method: 'delete'})
    };

    return (
        <Col xs={{ span: 6, offset: 3 }} className="mt-4">
            <Card>
                <Card.Header>Cookies:</Card.Header>
                <Card.Body>
                    {cookies.map((cookie, index) => <ListGroupItem key={index}>{JSON.stringify(cookie)}</ListGroupItem>)}
                </Card.Body>
            </Card>
            <Button onClick={() => addRandomCookie()}>Add a random cookie</Button>
            <Button variant='success' onClick={() => updateUsernameCookie()}>Update Username Cookie</Button>
            <Button variant='danger' onClick={() => deleteUsernameCookie()}>Delete Username Cookie</Button>
        </Col>
    );
}

export default CookieContainer;
