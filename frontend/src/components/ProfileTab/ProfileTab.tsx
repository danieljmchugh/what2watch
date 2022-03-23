import Togglable from "../Togglable/Togglable";


const ProfileTab = ({user} : any) =>  {
    
    return (
        <Togglable buttonLable='Profile'>
            {console.log('user in profiletab:', user)}
            {
                user    ?
                    <p>User email: {user.email}</p>
                    :
                    <p>No user logged in</p>
            }
            
        </Togglable>
    );
}

export default ProfileTab
