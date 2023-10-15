import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser);

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        // console.log(name,email);
        const updatedUser = { name, email };

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Good job!',
                        text: 'Updated successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
    return (
        <div>
            <h3>Update information of : {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' defaultValue={loadedUser?.name} />
                <br />
                <input type="email" name='email' defaultValue={loadedUser?.email} />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;