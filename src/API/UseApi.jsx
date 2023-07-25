import React, { useState } from 'react'

function useUserApi(props){
    const  [user,setUser] = useState([])
    return{
        users:[user,setUser]
    }
}

export default useUserApi