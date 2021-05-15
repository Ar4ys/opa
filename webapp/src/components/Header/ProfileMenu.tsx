import { useCallback, VFC } from 'react'
import { useDispatch } from 'react-redux'
import { Menu, MenuItem, PopoverProps } from '@material-ui/core'
import { useGoogleLogout } from 'react-google-login'
import { googleClientId } from '../../constants'
import { logout } from '../../store/thunks/user'

interface ProfileMenuProps {
  anchorEl?: PopoverProps['anchorEl']
  onClose?: () => void
}

export const ProfileMenu: VFC<ProfileMenuProps> = ({
  anchorEl,
  onClose
}) => {
  const dispatch = useDispatch()
  const { signOut } = useGoogleLogout({
    clientId: googleClientId,
    onLogoutSuccess: () => dispatch(logout())
  })
  const isMenuOpen = Boolean(anchorEl)
  const handleLogOut = useCallback(() => {
    onClose?.()
    signOut()
  }, [ onClose, signOut ])
  return <>
    <Menu
      id='profile-menu'
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={onClose}
      keepMounted
    >
      <MenuItem onClick={onClose}>Profile</MenuItem>
      <MenuItem onClick={handleLogOut}>Log out</MenuItem>
    </Menu>
  </>
}
