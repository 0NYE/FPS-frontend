import React,{useState} from 'react'

import { LanguageBox, ProblemBlock, ProblemMetaData, ProblemTitle, ProblemWrap, 
        TagBox, TagData,       
}from './Problem.styles' 

import { ReactComponent as Activated } from "@/assets/images/activated.svg";
import { ReactComponent as CSS } from "@/assets/images/css.svg";
import { ReactComponent as Dislike } from "@/assets/images/dislike.svg";
import { ReactComponent as Fail } from "@/assets/images/fail.svg";
import { ReactComponent as HTML } from "@/assets/images/html.svg";
import { ReactComponent as JS} from "@/assets/images/javascript.svg";
import { ReactComponent as Like} from "@/assets/images/like.svg";
import { ReactComponent as Person } from "@/assets/images/person.svg";
import { ReactComponent as Success } from "@/assets/images/success.svg";
import { ReactComponent as Successrate } from "@/assets/images/successrate.svg";
import { ReactComponent as Tag } from "@/assets/images/Tags.svg";



const Problem = ({title,bookmark,like,dislike,successrate,makerName,content,
            isPassed,setIsPassed,language,setLanguage
})=>{
    return(
        <ProblemBlock>
          <ProblemWrap>
            <ProblemTitle>{title}
            {isPassed?(
                <Success width="19px" height="19px"></Success>
            ):(
                <Fail width="19px" height="19px"></Fail>
            )
            }
            </ProblemTitle>
            <ProblemMetaData>
                <Activated width="20px" height="16px"/>{bookmark+'    '} 
                <Like width="20px" height="16px"/>{like+'    '} 
                <Dislike width="20px" height="16px"/>{dislike+'    '} 
                <Successrate width="20px" height="16px"/>{successrate+'%'+'    '}
                <Person></Person>{makerName+'    '}
            </ProblemMetaData>
            <TagData>
                <Tag></Tag>
                {content.map((item,index)=>
                    <TagBox key={index}>{item}</TagBox>
                )}
            </TagData>
          </ProblemWrap>
          <LanguageBox>
            {language.HTML?(<HTML></HTML>
            ):(
                <></>
            )}
            {language.CSS?(<CSS></CSS>
            ):(
                <></>
            )}
            {language.JS?(<JS></JS>
            ):(
                <></>
            )}
          </LanguageBox>
        </ProblemBlock>
    )

}
export default Problem;
