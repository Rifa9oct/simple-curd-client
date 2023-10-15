import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    const handleDelete = _id=> {
        console.log("delete", _id);
    }
    return (
        <div>
            <h1>Users: {users.length}</h1>
            <div>
                {
                    users.map( user => <p key={user._id}>{user.name} : {user.email} {user._id} <button onClick={()=> handleDelete(user._id)}>Delete</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;