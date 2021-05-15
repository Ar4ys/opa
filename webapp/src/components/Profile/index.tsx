import { VFC } from 'react'
import { styled } from '@material-ui/core'
import { ProfileInfo } from './ProfileInfo'
import { ProfileAlbums } from './ProfileAlbums'

const ProfileRoot = styled('main')({
  width: '50%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 'auto'
})

export const Profile: VFC = () => {
  return <>
    <ProfileRoot>
      <ProfileInfo name='lol' description='Some lol' avatar='https://material-ui.com/static/images/cards/contemplative-reptile.jpg' />
      <ProfileAlbums />
    </ProfileRoot>
  </>
}
