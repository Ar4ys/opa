import { VFC } from 'react'
import { styled, IconButton } from '@material-ui/core'
import { AccountCircle as AccountIcon } from '@material-ui/icons'

const ProfileButtonRoot = styled('div')(({ theme }) => ({
  display: 'flex'
}))

interface ProfileButtonProps {
  onMenuOpen?: () => void
}

export const ProfileButton: VFC<ProfileButtonProps> = ({
  onMenuOpen
}) => {
  return <>
    <ProfileButtonRoot>
      <IconButton
        edge='end'
        onClick={onMenuOpen}
        color='inherit'
      >
        <AccountIcon />
      </IconButton>
    </ProfileButtonRoot>
  </>
}
