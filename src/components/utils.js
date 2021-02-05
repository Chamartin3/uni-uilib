import { useRef, useState, useEffect} from 'react';


import * as Icons from '@material-ui/icons'
import uniIcon from './Icon'

const getIcon = name => {
  if(!name) return null
  if(name === 'uniIcon') return uniIcon
  if( Icons[name] ) return Icons[name]
  console.error(`Icon ${name} not found `)
}

function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}
export {
  getIcon,
  useHover
}