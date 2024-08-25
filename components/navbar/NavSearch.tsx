import React from 'react'
import { Input } from '../ui/input'

type Props = {}

const NavSearch = (props: Props) => {
  return (
    <Input type="search" placeholder='search product...' className='max-w-xs dark:bg-muted'/>
  )
}

export default NavSearch