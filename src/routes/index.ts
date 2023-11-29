import  express  from 'express'
const userRoute = express.Router()
import { register, login} from '../controllers'


userRoute.post('/register', register)

export {
    userRoute
}
