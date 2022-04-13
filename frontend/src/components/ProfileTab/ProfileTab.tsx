import Togglable from "../Togglable/Togglable";


const ProfileTab = ({user, onLogout} : any) =>  {

    return (
        <Togglable buttonLable='Profile'>
            {
                user ?
                    <>
                        <p>Welcome {user.name}!</p>
                        <button onClick={onLogout}>Logout</button>
                    </>
                    
                    :
                    <p>No user logged in</p>
            }
            
        </Togglable>
    );
}

export default ProfileTab
