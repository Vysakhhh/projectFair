import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import View from '../components/View'


function Dashboard() {

  const [username, setUsername] = useState("")

  useEffect(() => {
        if(sessionStorage.getItem("user")){
          setUsername(JSON.parse(sessionStorage.getItem("user")).username)
        }
        else{
          setUsername("")
        }
  }, [])

  return (
    <>
      <Header />

      <div className='container w-100  mt-5' style={{ minHeight: '60vh' }}>

        <div className='row '>
          <div className="col-lg-8  ">

            <h1 className='text-dark fw-bold fs-2'>Welcome <span className='text-primary'>{username.split(" ")}</span></h1>
            <div>
              <View />
            </div>

          </div>
          <div className="col-lg-4  mt-4">
            <Profile />
          </div>

        </div>
      </div>












    </>
  )
}

export default Dashboard