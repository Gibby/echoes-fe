import React, { useState, useContext } from 'react'
import { UserContext } from '../Context/UserContext'


const Missions = () => {
  const {user, setUser} = useContext(UserContext)
  const [runners, setRunners] = useState()
  return(
    <section className="runners">
      {
        runners.map(runner => {
          return(
            <div>
              {runner.name}
            </div>
          )
        })
      }
    </section>
  )
}

export default Missions