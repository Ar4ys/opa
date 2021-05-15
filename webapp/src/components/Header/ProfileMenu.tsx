import { VFC } from 'react'
import { Menu, MenuItem, PopoverProps } from '@material-ui/core'

interface ProfileMenuProps {
  anchorEl?: PopoverProps['anchorEl']
  onClose?: () => void
}

export const ProfileMenu: VFC<ProfileMenuProps> = ({
  anchorEl,
  onClose
}) => {
  const isMenuOpen = Boolean(anchorEl)
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
      <MenuItem onClick={onClose}>Log out</MenuItem>
    </Menu>
  </>
}
