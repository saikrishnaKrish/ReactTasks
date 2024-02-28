import React from 'react'
import useApiCall from '../hooks/useApiCall'
import UserCard from './UserCard'

const UserDetails = () => {

    const url='https://jsonplaceholder.typicode.com/users/'
    const {data,error,isLoading}=useApiCall(url,[])
    console.log(data)
    
  return (
    <div >
    <div>UserDetails</div>
    <div className='userDetails-Container'>
    
    {data.length > 0 && data.map((item)=><UserCard user={item}/>)
    }
    </div>
    </div>
  )
}

export default UserDetails