import { VFC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { Home } from './Home/index'
import { Header } from './Header/index'

export const App: VFC = () => {
  return <>
    <CssBaseline />
    <Router>
			<Header />
			<Switch>
				<Route exact path="/" children={<Home />}/>
			</Switch>
		</Router>
  </>
}
