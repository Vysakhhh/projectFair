import React, { createContext, useEffect, useState } from 'react'


export const addResponseContext=createContext()
export const editResponseContext=createContext()
export const tokenAuthContext=createContext()





function ContextAPI({children}) {

  const [addResponse,setAddResponse]=useState("")
  const [editResponse,setEditResponse]=useState("")
  const [isAuthorized,setIsAuthorized]=useState(false)

  useEffect(() => {
 
    if(sessionStorage.getItem("token")){
     setIsAuthorized(true)
    }
    else{
     setIsAuthorized(false)
   
   
    }
   }, [isAuthorized])
   
  return (
    <>
 <tokenAuthContext.Provider  value={{isAuthorized,setIsAuthorized}}>
  <editResponseContext.Provider value={{editResponse,setEditResponse}}>
 <addResponseContext.Provider value={{addResponse,setAddResponse}}>
    {children}
 </addResponseContext.Provider>
 </editResponseContext.Provider>
 </tokenAuthContext.Provider>
    
    </>
  )
}

export default ContextAPI