import { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import profileImg from '../assets/profileImg.png'
import { TextField } from '@mui/material';
import server_url from '../../Services/server_url';
import { toast } from 'react-toastify';
import { updateProfileAPI } from '../../Services/allAPI';





function Profile() {

  const [userDetails, setUserDetails] = useState({ username: "", password: "", email: "", github: "", linkedin: "", profilePic: "" })
  const [existingImg, setExistingImg] = useState("")

  const [open, setOpen] = useState(false);

  const [preview,setPreview]=useState("")

  useEffect(() => {

    if (sessionStorage.getItem("user")) {
      let existingUser = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({ ...userDetails, username: existingUser?.username, password: existingUser?.password, email: existingUser?.email, github: existingUser?.github, linkedin: existingUser?.linkedin })
      setExistingImg(existingUser?.profilePic)
    }

  }, [open])

  useEffect(() => {

    if(userDetails?.profilePic){
      setPreview(URL.createObjectURL(userDetails.profilePic))
    }
    else{
      setPreview("")
    }

  }, [userDetails.profilePic])
  

  const handleUpdateProfile=async(e)=>{
    e.preventDefault()
           
    const {username,password,email,github,linkedin,profilePic}=userDetails

    if(linkedin && github){

      const reqBody=new FormData()
      reqBody.append("username",username)
      reqBody.append("password",password)
      reqBody.append("email",email)
      reqBody.append("github",github)
      reqBody.append("linkedin",linkedin)
     preview? reqBody.append("profilePic",profilePic):reqBody.append("profilePic",existingImg)

     const token=sessionStorage.getItem("token")
     if(token){
       const reqHeader={
         "content-type": preview?"multipart/form-data":"application/json",
         "authorization":`Bearer ${token}`
       }
        try{
        // api call

        const result =await updateProfileAPI(reqBody,reqHeader)
        console.log(result);

        if(result.status==200){
          setOpen(!open)
          sessionStorage.setItem("users",JSON.stringify(result.data))
        }
        
        }
        catch(err){
          console.log(err);
          
        }
     }

    }
    else{
      toast.warning("enter the fields completely")
    }

   
  }


  return (
    <>


      <div className='d-flex justify-content-between align-items-center mt-3 ms-5'>
        <h3 className='text-danger fs-4 fw-semibold'>Profile</h3>
        <button className='btn' onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} >
          <i className="fa-solid fa-chevron-down fa-lg"></i>
        </button>
        <Collapse in={open}>
          <div id="example-collapse-text d-flex justify-content-center align-items-center p-2">
            <label>
              <input onChange={(e)=>setUserDetails({...userDetails,profilePic:e.target.files[0]})} type="file" style={{ display: 'none' }} />
              {existingImg ?
                <img className='img-fluid rounded-circle' src={preview? preview:`${server_url}/uploads/${existingImg}`} alt="" />
                :
                <img className='img-fluid rounded-circle' src={preview? preview:profileImg} alt="" />


              }
            </label>

            <form className='ms-3 mb-3'>
              <div className='mb-3'>
                <TextField onChange={(e)=>setUserDetails({...userDetails,github:e.target.value})} value={userDetails?.github} className='form-control ' id="standard-basic" label="Github link" variant="standard" />
              </div>
              <div className='mb-3'>
                <TextField  onChange={(e)=>setUserDetails({...userDetails,linkedin:e.target.value})} value={userDetails?.linkedin} className='form-control ' id="standard-basic" label="Linkedn link" variant="standard" />
              </div>

              <button onClick={(e)=>handleUpdateProfile(e)} style={{ backgroundColor: 'green' }} className='btn  text-white w-100 fw-semibold  mt-3'>Update Profile</button>
            </form>

          </div>
        </Collapse>
      </div>











    </>
  )
}

export default Profile