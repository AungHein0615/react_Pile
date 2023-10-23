import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import {imgArray} from "../img/img"

const url = ('https://pick-a-pile.vercel.app/api/questions')

function Home() {

    const [category, setCategory] = useState([])

    const navigate = useNavigate()

    function toDetails (id){
        navigate(`/details/${id}`)
    }
  
    async function getData(){
        const repsonse = await fetch(url)
        const category = await repsonse.json()
        setCategory(category.questions)
    }

    useEffect(() => {
        getData()
    },[])

  return (
    <>
        <div>
            <div className="container">
                <div className="row mt-5">
            {
                category.map((question,index) => (
                    <div key={question.QuestionId} className="card col-sm-12 col-md-12 col-lg-4">
                        <img className='categoryImg' src={imgArray[index]} />
                        <h6 className='cardTitle'>{question.QuestionName}</h6>
                        <div onClick={() => toDetails(
                            question.QuestionId
                        )} className='readMore'>Reade more...</div>
                    </div>
                ))
            }
            </div>
            </div>
        </div>
    </>
  )
}

export default Home