import { VFC } from 'react'
import { Avatar, Typography, styled } from '@material-ui/core'

interface ProfileInfoProps {
  name: string
  avatar?: string
  description?: string
}

const ProfileInfoRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  margin: theme.spacing(3, 0),
  padding: theme.spacing(0, 5)
}))

const ProfileAvatar = styled(Avatar)({
  width: '150px',
  height: '150px'
})

const ProfileDescription = styled('div')({
  marginLeft: '15%'
})

export const ProfileInfo: VFC<ProfileInfoProps> = ({
  name,
  avatar,
  description
}) => {
  return <>
    <ProfileInfoRoot>
      <ProfileAvatar src={avatar} />
      <ProfileDescription>
        <Typography variant='h6' noWrap>
          {name}
        </Typography>
        <Typography variant='body1' noWrap>
          {description}
        </Typography>
      </ProfileDescription>
    </ProfileInfoRoot>
  </>
}
