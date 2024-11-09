import React from "react";

const UserContext = React.createContext()

export default UserContext;


// Note we have to wrape the UserContext Btn those elemet which want to use those element

{/* <UserContext>  /// thise is provider
    <Login/>
    <Card>
        <Data/>
     <Card/>
<UserContext/> */}