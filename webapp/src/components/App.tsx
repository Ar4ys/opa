import { VFC } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { useGoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { googleClientId } from '../constants'
import { login } from '../store/thunks/user'
import { Home } from './Home/index'
import { Header } from './Header/index'
import { Profile } from './Profile/index'

export const App: VFC = () => {
  const dispatch = useDispatch()
  useGoogleLogin({
    clientId: googleClientId,
    onSuccess: response => dispatch(login(response)),
    isSignedIn: true,
  })

  return <>
    <CssBaseline />
    <Router>
			<Header />
			<Switch>
				<Route exact path="/" children={<Home />}/>
				<Route exact path="/@" children={<Redirect to='/' />}/>
				<Route exact path="/@:id" children={<Profile />}/>
			</Switch>
		</Router>
  </>
}
