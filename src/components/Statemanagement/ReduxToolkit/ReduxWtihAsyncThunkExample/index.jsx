// import { useState } from "react";
// import { useEffect } from "react";

// const UserExample = () => {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async () => {
//       try {
//         setLoading(true);
//         const resp = await fetch(
//           "https://jsonplaceholder.typicode.com/users/1"
//         );
//         const user = await resp;
//         setUser(user);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };
//   }, []);

//   const heading = <h2>User Example</h2>;

//   if (loading) {
//     return (
//       <>
//         {heading}
//         <h3>...loading</h3>
//       </>
//     );
//   }

//   if (error) {
//     return (
//       <>
//         {heading}
//         <h3>Error occurred</h3>
//       </>
//     );
//   }
//   return (
//     <div>
//       {heading}

//       <h4>Name : {user.name}</h4>
//       <h4>Phone : {user.phone}</h4>
//     </div>
//   );
// };

// export default UserExample;

import React,{ useEffect, useMemo, memo }  from "react";
import { useSelector, useDispatch } from "react-redux";
import { collectUsers, fetchUsers } from "../Store/Slices/userSlice";


const UsersList = (({users})=>{
  const dispatch = useDispatch();
  
  console.log("re--renderd")
    return (<ul>
            {
              users?.map((user)=>{
                  return  <div key={user.id}>
                               <h4>Name: {user.name}</h4>
                               <h4>Phone: {user.phone}</h4>
                               <button onClick={() => dispatch(collectUsers(user.name))}> add to list</button>
                           </div>
                   })
            }
    </ul>)
})



const UserExample = () => {
  const dispatch = useDispatch();
  const { user, isLoading, error,userNames } = useSelector((state) => state.userState);
  const cachedUsersList = useMemo(() => <UsersList users={user} />, [user]); 
  useEffect(() => {
    // Invoke the async function inside useEffect
    const fetchData = async () => {
      try {
        dispatch(fetchUsers());
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchData(); // Call the async function

    // Cleanup function
    return () => {
      // Cleanup logic, if needed
    };
  }, [dispatch]);

  const heading = <h2>User Example</h2>;

  if (isLoading) {
    return (
      <>
        {heading}
        <h3>...loading</h3>
      </>
    );
  }

  if (error) {
    return (
      <>
        {heading}
        <h3>Error occurred</h3>
      </>
    );
  }
  
  return (
    <div>
      <br/>
      {heading} createAysncThunk example

      used useMemo for performance optimization 
      <div>
        Showing users -- {userNames?.length}
      </div>

<div className="redux-user-list">
{/* {user.length > 0 && <UsersList users={user}/> } */}
  {user.length > 0 &&  cachedUsersList}


</div>
     
    </div>
  );
};

export default UserExample;
