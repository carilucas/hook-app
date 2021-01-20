import React, {memo} from 'react'

export const Small = memo(({value}) => {
   console.log('me llame');
   return (
      <small>
         {value}
      </small>
   )
})
