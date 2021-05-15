import { VFC } from 'react'
import { CssBaseline } from '@material-ui/core'
import { Header } from './Header/index'

export const App: VFC = () => {
  return <>
    <CssBaseline />
    <Header />
    <main>
      Hello World!
    </main>
  </>
}
