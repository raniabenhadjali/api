import axios from 'axios'
import React,{useState} from 'react'

const Users = () => {
    const [userList ,setUSersList]=useState([])
    const getData=async()=>{
     
      await axios 
        .post("https://jsonplaceholder.typicode.com/users")
        .then(res=>{setUSersList(res.data)})
        .catch(err=>console.log(err) )
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
<h1>my list</h1>

{
    userList.map(user=>(
        <div KEy ={user.id}>
            <h1>{user.name} </h1>
            <h2>{user.email}</h2>
        </div>

    ))
}

        
    </div>
  )
}

export default Users