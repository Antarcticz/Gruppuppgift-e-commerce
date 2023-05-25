import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase/config'

const signUp = async (email, password ) => {
    const userCred = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCred)
    return userCred
}



const authService = {
    signUp
}

export default authService