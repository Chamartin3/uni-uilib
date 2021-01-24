
import * as Icons from '@material-ui/icons'
import uniIcon from './Icon'

const getIcon = name => {
  if(!name) return null
  if(name === 'uniIcon') return uniIcon
  if( Icons[name] ) return Icons[name]
  console.error(`Icon ${name} not found `)
}


export {
  getIcon
}