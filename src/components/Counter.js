 import {  useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  let [like, setlike] = useState(0);
  let [dislike, setdislike] = useState(0);
  const IncrementLike = () => setlike(like + 1);
  const DecrementLike = () => setdislike(dislike + 1);
  
  // useEffect(()=>{
  //   console.log("the update like is",like);
  // },[like])
  // useEffect(()=>{
  //   console.log("the update dislike is",dislike);
  // },[dislike])
  
  return <>
    <div className="sample22">
      <IconButton onClick={IncrementLike} color="primary" aria-label="toggle-summary">
        👍<Badge badgeContent={like} color="primary">

        </Badge>
      </IconButton>
      <IconButton onClick={DecrementLike} color="primary" aria-label="toggle-summary">
        👎<Badge badgeContent={dislike} color="error">

        </Badge>
      </IconButton>

    </div>
  </>;
}
