import { VFC } from 'react'
import {
  styled,
  withStyles,
  IconButton,
  Card,
  CardMedia,
  CardHeader,
  CardActionArea
} from '@material-ui/core'
import {
  FavoriteBorder as FavoriteIcon,
  CommentOutlined as CommentIcon,
  SendRounded as SendIcon,
  Share as ShareIcon
} from '@material-ui/icons'

interface AlbumCardProps {
  img: string
  name: string
}

const AlbumCardRoot = styled(Card)({
  width: '30%'
})

const AlbumCardHeader = withStyles({
  action: {
    margin: 0
  }
})(CardHeader)

export const AlbumCard: VFC<AlbumCardProps> = ({
  img,
  name
}) => {
  return <>
    <AlbumCardRoot>
      <CardActionArea>
        <AlbumCardHeader
          title={name}
          titleTypographyProps={{ variant: 'h6' }}
          action={
            <IconButton size='small'>
              <ShareIcon />
            </IconButton>
          }
        />
        <CardMedia
          component='img'
          image={img}
          title={name}
          alt={name}
        />
      </CardActionArea>
    </AlbumCardRoot>
  </>
}
