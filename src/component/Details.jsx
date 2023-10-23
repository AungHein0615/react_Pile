import React, { useEffect, useState } from 'react'
import {Navigate, useNavigate, useParams } from 'react-router-dom'
import {pileImgArray} from "../img/img"


const url = ('https://pick-a-pile.vercel.app/api/questions')
const answerURL = ('https://pick-a-pile.vercel.app/api/answers')

function Details() {
    const {id:detailID} = useParams()

    const [ des , setDes] = useState([])
    const [answer, setAnswer] = useState([])

    const navigate = useNavigate()

    function onDetails (id,index){
        navigate(`/innerId/${id}?img=${detailID-1}-${index}`)
    }

    async function getDetailsData(){
        const response = await fetch(url)
        const des = await response.json()
        const detaliList = des.questions[detailID-1]
        setDes(detaliList)
    }

    async function getAnswer(){
        const response = await fetch(answerURL)
        const answer = await response.json()
        const answerList = answer.answers
        setAnswer(answerList.filter((f) => f.QuestionId == detailID))
    }

    // console.log(answer)

    useEffect(() => {
        getDetailsData()
        getAnswer()
    },[])


  return (
    <>
    <div className="container">
    
        <div className='desArea col-sm-12 col-md-12 col-lg-12'>
            {
                des.QuestionDesp
            }
        </div>
    
    </div>
    <div className='container'>
        <div className="row mt-5">

        {
            pileImgArray[detailID-1].map((pileImg,index) => (
                
                <div key={answer.AnswerID} className='col-sm-6 col-md-6 col-lg-3 p-2 '>
                    <div onClick={() => onDetails(
                        answer[index].AnswerId, index
                    )} className='answerCard'>
                        <img className='pileImg'  src={pileImg}/>
                        <h6 className='pileTitle'>{answer[index]?.AnswerName}</h6>
                    </div>
                </div>
                
                ))
                
        }

                
         </div> 
    </div>
    </>
  )
}

export default Details