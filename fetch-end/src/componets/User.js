import {useEffect,useState} from 'react'

function User() {
    const [users,setUsers]=useState([]);
    const[isLoading,setLoading]=useState(true);
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((data)=>{
        setUsers(data)
        setLoading(false);
    })
    .catch((e)=>console.log(e));
    },[]);
  return (
    <div>
     <h1>Users</h1>
     {isLoading && <div>Loading..</div>}
      {users.map((user)=>(
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default User
