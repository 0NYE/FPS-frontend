import React from 'react';

import { 
    HistoryLayout,
    HistoryTime,
    HistoryTitle 
} from './HistoryBlock.styles';



const HistoryBlock= ({
    title,
    year,
    mon,
    day,
    hour,
    min
})=>{
    return(
        <HistoryLayout>
            <HistoryTitle>{title}</HistoryTitle>
            <HistoryTime>{year}-{mon}-{day} {hour}:{min}</HistoryTime>
        </HistoryLayout>
    )
};

export default HistoryBlock;