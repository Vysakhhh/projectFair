import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import authImg from '../assets/authImg.png'
import { loginAPI, registerAPI } from '../../Services/allAPI';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import { tokenAuthContext } from '../contexts/ContextAPI';








function Auth({ insideRegister }) {

  const {setIsAuthorized}=useContext(tokenAuthContext)
  const [userData, setUserData] = useState({ username: "", email: "", password: "" })
  console.log(userData);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigate = useNavigate()


  const handleRegister = async (e) => {
    e.preventDefault()

    const { username, email, password } = userData

    if (username && email && password) {
      // api call

      try {
        const result = await registerAPI(userData)
        console.log(result);

        if (result.status == 200) {
          navigate('/login')
          setUserData({ username: "", email: "", password: "" })
        }
        else {
          if (result.status == 406) {
            toast.error(result.response.data)
            setUserData({ username: "", email: "", password: "" })
          }
        }
      }
      catch (err) {
        console.log(err);

      }

    }
    else {
      toast.warning("please fill the form completely")
    }


  }

  const handleLogin = async (e) => {
    e.preventDefault()
    if (userData.email && userData.password) {
      // api call
      try {
        const result = await loginAPI(userData)
        console.log(result);

        if (result.status == 200) {
         
          setIsLoggedIn(true)
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", result.data.token)
          setIsAuthorized(true)

          setTimeout(() => {

            //redirect to homepage

            setUserData({ username: "", email: "", password: "" })
            navigate('/')
            setIsLoggedIn(false)

          }, 2000);


        }
        else {
          if (result.status == 404) {
            toast.error(result.response.data)

          }
        }


      }
      catch (err) {
        console.log(err);

      }
    }
    else {
      toast.warning("please fill all the form completely")
    }

  }

  return (
    <>

      <div style={{ minHeight: '90vh', width: '100%' }}>
        <div className=' container mt-5 w-75 '  >

          <div className='card shadow p-4 bg-light '>

            <div className='row align-items-center '>
              <div className="col-lg-6">
                <img src={authImg} alt="" className='w-100' />

              </div>
              <div className="col-lg-6 ">
                <div className='mt-5 ms-4'>
                  <h3 className=' fs-2  text-primary fw-semibold'><i class="fa-brands fa-docker  me-1 text-warning"></i> Project Fair</h3>
                  <h6 style={{ color: 'orangered' }} className=' fs-5  ms-2'>Sign {insideRegister ? 'up' : 'in'} to your account</h6>

                  <form className='mt-3'>
                    {insideRegister &&
                      <div className='mt-4'>
                        <TextField onChange={(e) => setUserData({ ...userData, username: e.target.value })} className='form-control mb-3' id="username" label="User name" variant="outlined" value={userData.username} />
                      </div>
                    }
                    <div className='mt-2'>
                      <TextField onChange={(e) => setUserData({ ...userData, email: e.target.value })} className='form-control mb-3' id="email" label="Email address" variant="outlined" value={userData.email} />
                    </div>
                    <div className='mt-2'>
                      <TextField onChange={(e) => setUserData({ ...userData, password: e.target.value })} className='form-control mb-3' id="password" label="Password" type='password' variant="outlined" value={userData.password} />


                    </div>
                  </form>




                  {insideRegister ?
                    <div>
                      <Button onClick={handleRegister} className='btn w-100 text-white btn-primary fw-semibold mt-2' variant="contained">Sign Up</Button>

                      <p className='mt-3 text-center'>Already have an account? <Link to={'/login'} className=' text-info'>Login</Link></p>
                    </div>

                    :
                    <div>
                      <Button onClick={handleLogin} color='success' className='btn w-100 text-white btn-success fw-semibold mt-2' variant="contained">Sign In 
                       { isLoggedIn &&
                        <Spinner className='ms-2' animation="border" variant="light" />}
                      </Button>


                      <p className='mt-3 text-center'>Don't have an account yet? <Link to={'/register'} className='text-info'>Register</Link></p>
                    </div>


                  }

                </div>
              </div>
            </div>



          </div>
        </div>

      </div>











    </>
  )
}

export default Auth