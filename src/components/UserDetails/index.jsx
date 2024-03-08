import useApiCall from '../hooks/useApiCall'
import UserCard from './UserCard'

const UserDetails = () => {

    const url='https://jsonplaceholder.typicode.com/users/';
    const {data,error,isLoading}=useApiCall(url,[])
    console.log(data)
    
  return (
    <div >
    <div>UserDetails</div>
    <div className='userDetails-Container'>
    { 
    isLoading &&<>Loading...</>
    }
    {data.length > 0 && data.map((item)=><UserCard key={item.id} user={item}/>)
    }
    </div>
    </div>
  )
}

export default UserDetails