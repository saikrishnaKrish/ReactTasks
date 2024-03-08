import React, { useEffect, useMemo, useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Link, useParams, Navigate } from "react-router-dom";
function Routing() {
    return (
        <Router>
        <div style = {{
            textAlign: 'center',
            marginLeft: "50vw"
        }}>
            <h2>Routing Example</h2>
            <nav>
                <ul>
                    <li>
                        <Link to = "/home" >Home Page </Link>
                    </li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to = "/listing">Listing</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path = "/home/" element = {<Home></Home>}></Route>
                <Route path = "/about/*" element = {<About></About>}> </Route>
                <Route path = "/listing" element = {<Listing></Listing>}></Route>
                <Route path = "/abc" element = {<Navigate to="/home"></Navigate>}></Route>
                <Route path = "/users" element={<UsersList></UsersList>}/>
                {/* template routes -> dynamic routes  */}
                <Route path = "/users/:id" element = {<Users isAdmin = {true}></Users>}> </Route>
                <Route path = "*" element = {<PageNotFound></PageNotFound>}> </Route>
                {/* path -> /* -. wild card  */}
            </Routes>
        </div>
        </Router>
    )
}

function About() {
    return (
        <>
            <h2>About Page</h2>
            <Routes>
                <Route path = "company" element = {<Company />}> </Route>
                <Route path = "founders" element = {<Founder></Founder>}> </Route>
            </Routes>
        </>
    )
}
function Company() {
    return <h4> We are  a good firm</h4>
}
function Founder() {
    return <h4> We are Nice People </h4>
}

function Users(props) {
   
    let params = useParams();
    let [user, setUser] = useState(null);
    console.log("46", params.id)
    const uid=params.id
    
   async function fetchUserData() {
        const resp = await fetch(`https://fakestoreapi.com/users/${uid}`)
        const userData = await resp.json();
        console.log(userData);
        setUser(userData);
     }


    // https://fakestoreapi.com/users/2
    // useEffect(() => {
        useMemo(()=>{
            fetchUserData()
        },[uid])
    // }, [uid])

    return <>
      {
        <>
        {user!=null && <>
            <UserComponent key={user?.id} user={user}/>
            <Link to="/users">Go to Users</Link>
        </>}
         </>

      }
    </>

}

function Home() {
    return <h3>I am Home Page</h3>
}
function Listing() {
    return <h3>I am Listing Page</h3>
}

function PageNotFound() {
    return <h3>Page Not found</h3>;
}



const UserComponent = ({ user }) => {
    const {
      id,
      email,
      username,
      password,
      name,
      phone,
      address: { geolocation, city, street, number, zipcode },
    } = user;
  
    return (
      <div>
        <h2>User Details</h2>
        <p>ID: {id}</p>
        <p>Email: {email}</p>
        <p>Username: {username}</p>
        <p>Password: {password}</p>
        <p>Name: {name.firstname} {name.lastname}</p>
        <p>Phone: {phone}</p>
  
        <h3>Address</h3>
        <p>City: {city}</p>
        <p>Street: {street}</p>
        <p>Number: {number}</p>
        <p>Zipcode: {zipcode}</p>
        <p>Geolocation: Lat: {geolocation.lat}, Long: {geolocation.long}</p>
      </div>
    );
  };
  

  function UsersList() {
    const [userList, setUserList] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const resp = await fetch(`https://fakestoreapi.com/users`);
          const userData = await resp.json();
          console.log(userData);
          setUserList(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <>
        {userList.length > 0 ? (
          userList.map((user) => (
            <div key={user.id}>
              <h4>User Name: {user.username}</h4>
              <h3>Name: {user.name.firstname + ' ' + user.name.lastname}</h3>
              <h4>Phone: {user.phone}</h4>
              <Link to={`/users/${user.id}`}>Click here</Link>
            </div>
          ))
        ) : (
          <h3>...loading</h3>
        )}
      </>
    );
  }
  


export default Routing