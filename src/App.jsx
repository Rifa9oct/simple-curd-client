import './App.css'
import Swal from 'sweetalert2'

function App() {

  const handleAddUser = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    console.log(user);

    fetch('http://localhost:5000/users',{
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Good job!',
          text: 'User added successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        form.reset();
      }
    })
  }

  return (
    <>
      <h2>simple-curd-client</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' placeholder='your name' />
        <br />
        <input type="email" name='email' placeholder='your email' />
        <br />
        <input type="submit" value="Add User"/>
      </form>
    </>
  )
}

export default App
