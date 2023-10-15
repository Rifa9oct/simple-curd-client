import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)
    const handleDelete = _id => {
        console.log("delete", _id);

        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Good job!',
                        text: 'Delete successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                }
            })
    }
    return (
        <div>
            <h1>Users: {users.length}</h1>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        {user.name} : {user.email} {user._id}
                        <Link to={`/update/${user._id}`}>
                            <button>Update</button>
                        </Link>
                        <button onClick={() => handleDelete(user._id)}>Delete</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;