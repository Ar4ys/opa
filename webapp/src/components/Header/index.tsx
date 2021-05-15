import { useState, MouseEvent, VFC } from 'react'
import { styled } from '@material-ui/core'
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core/'
import { SearchBar } from './SearchBar'
import { ProfileButton } from './ProfileButton'
import { ProfileMenu } from './ProfileMenu'

const HeaderRoot = styled(AppBar)({
  color: 'black',
  background: 'white',
  alignItems: 'center'
})

export const Header: VFC = () => {
  const [
    profileAnchorEl,
    setProfileAnchorEl
  ] = useState<null | HTMLElement>(null)

  const handleProfileMenuOpen = (event?: MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event!.currentTarget)
  }

  const handleMenuClose = () => {
    setProfileAnchorEl(null)
  }

  return <>
    <HeaderRoot position='static'>
      <Toolbar>
        <Typography variant='h6' noWrap>
          OPA
        </Typography>
        <SearchBar />
        <ProfileButton onMenuOpen={handleProfileMenuOpen} />
      </Toolbar>
    </HeaderRoot>
    <ProfileMenu anchorEl={profileAnchorEl} onClose={handleMenuClose} />
  </>
}
