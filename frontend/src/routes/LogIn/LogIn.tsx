
const LogIn = ({
    handleSubmit, 
    handleEmailChange,
    handlePasswordChange,
    email, 
    password } : any) => {

    return (
        <>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    placeholder="email"
                    autoFocus
                    value={email}
                    onChange={handleEmailChange}
                />
                
                <input 
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                
                <button type="submit">Login</button>
            </form>
        </>
    );
}


export default LogIn