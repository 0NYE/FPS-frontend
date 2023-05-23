import React from 'react';

import { 
  HistoryLayout,
  HistoryTime,
  HistoryTitle 
} from './HistoryBlock.styles';



const HistoryBlock= ({
  title,
})=>{
  const currentDate = new Date();
  const year = currentDate.getFullYear(); 
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hour = currentDate.getHours();
  const min = currentDate.getMinutes();
  return(
      <HistoryLayout>
          <HistoryTitle>{title}</HistoryTitle>
          <HistoryTime>{year}-{month}-{day} {hour}:{min}</HistoryTime>
      </HistoryLayout>
  )
};

export default HistoryBlock;