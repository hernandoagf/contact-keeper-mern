import { useContext, useEffect } from 'react'
import ContactForm from '../contacts/ContactForm'
import Contacts from '../contacts/Contacts'
import ContactFilter from '../contacts/ContactFilter'
import AuthContext from '../../context/auth/authContext'

const Home = () => {
  const authContext = useContext(AuthContext)

  // eslint-disable-next-line
  useEffect(() => authContext.loadUser(), [])

  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  )
}

export default Home
