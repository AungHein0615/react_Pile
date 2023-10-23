import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import {pileImgArray} from "../img/img"


const answerURL = ('https://pick-a-pile.vercel.app/api/answers')

function InnerDetails() {

const {id:innerId} = useParams()

    const [answerDetail,setAnswerDetail] = useState([])
    const [searchParams] = useSearchParams()
    let imgIndex = searchParams.get('img')
    let imgArr = imgIndex.split("-")

    console.log(searchParams.get('img'))

    async function getDetailAnswer(){
        const response = await fetch(answerURL)
        const answerDetail = await response.json()
        const answerList = answerDetail.answers
        setAnswerDetail(answerList.find((f) => f.AnswerId == innerId))
    }

    console.log("...",answerDetail)
    console.log(answerDetail.AnswerDesp)
    


    useEffect(() => {
        getDetailAnswer()
    },[])
    
  return (
    <div className="container">
        <div className="row">
            {/* {
                pileImgArray.map((pile) => (
                    <img className='innerImg' src={pile[innerId-1]} />
                ))
            } */}
            <img className='innerImg col-sm-12 col-md-12 col-lg-12' src={pileImgArray[imgArr[0]][imgArr[1]]}/>
            {
                <div>
                    <h1>{answerDetail.AnswerName}</h1>
                    <p>{answerDetail.AnswerDesp}</p>
                </div>
            }
        </div>
    </div>
  )
}

export default InnerDetails