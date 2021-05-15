import { VFC } from 'react'
import { styled } from '@material-ui/core'
import { AlbumCard } from './AlbumCard'

const ProfileAlbumsRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  borderTop: '1px solid rgba(0,0,0,.15)',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2, 0),
}))

export const ProfileAlbums: VFC = () => {
  return <>
    <ProfileAlbumsRoot>
      <AlbumCard name='test' img='https://material-ui.com/static/images/cards/contemplative-reptile.jpg' />
      <AlbumCard name='test' img='https://material-ui.com/static/images/cards/contemplative-reptile.jpg' />
      <AlbumCard name='test' img='https://material-ui.com/static/images/cards/contemplative-reptile.jpg' />
    </ProfileAlbumsRoot>
  </>
}
