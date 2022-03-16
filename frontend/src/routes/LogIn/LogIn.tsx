import { useState } from 'react'; 

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event : any) => {
        event.preventDefault();
        console.log(`Logging in with email: ${email} and password: ${password}`);
    }

    return (
        <>
            <h1>Log In</h1>
            <form onSubmit={handleLogin}>
                <input 
                    type="email"
                    placeholder="email"
                    autoFocus
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />
                
                <input 
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                
                <button type="submit">Log In</button>
            </form>
        </>
    );
}


export default LogIn