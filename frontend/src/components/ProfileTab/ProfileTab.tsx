import Togglable from "../Togglable/Togglable";


const ProfileTab = ({user} : any) =>  {
    
    return (
        <Togglable buttonLable='Profile'>
            {console.log(user)}
            {
                user ?
                    <p>Welcom {user.name}!</p>
                    :
                    <p>No user logged in</p>
            }
        </Togglable>
    );
}

export default ProfileTab
