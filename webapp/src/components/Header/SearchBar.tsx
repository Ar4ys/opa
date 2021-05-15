import { VFC } from 'react'
import { fade, withStyles, styled } from '@material-ui/core'
import { InputBase } from '@material-ui/core/'
import { Search as SearchIcon } from '@material-ui/icons'

const SearchBarRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: fade(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  }
}))

const SearchBarIcon = styled(SearchIcon)(({ theme }) => ({
  margin: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const Input = withStyles(theme => ({
  root: {
    color: 'inherit'
  },
  input: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}))(InputBase)

export const SearchBar: VFC = () => {
  return <>
    <SearchBarRoot>
      <SearchBarIcon />
      <Input placeholder='Search…' />
    </SearchBarRoot>
  </>
}
