import { VFC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, Button, Typography, Avatar } from '@material-ui/core'
import { useGoogleLogin } from 'react-google-login'
import { googleClientId } from '../../constants'
import { login } from '../../store/thunks/user'

interface ProfileButtonProps {
  onMenuOpen?: () => void
}

export const ProfileButton: VFC<ProfileButtonProps> = ({
  onMenuOpen
}) => {
  const dispatch = useDispatch()
  const user = useSelector(store => store.user.user)
  const { signIn } = useGoogleLogin({
    clientId: googleClientId,
    onSuccess: response => dispatch(login(response))
  })
  return <>
    {user
      ? <IconButton size='small' onClick={onMenuOpen}>
          <Avatar src={user.imageUrl} />
        </IconButton>
      : <Button onClick={signIn}>
          <Typography variant='h6'>Login</Typography>
        </Button>}
  </>
}
