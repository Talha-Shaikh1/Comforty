'use client'
import React from 'react'
import { BsPlus } from 'react-icons/bs'


const faqs = [
    {
        id: 1,
        question: "What types of chairs do you offer?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, vel.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, vel."
    },
    {
        id: 2,
        question: "How can we get in touch with you?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, vel.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, vel."
    },
    {
        id: 3,
        question: "Do you chairs come with a warrenty?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, vel.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, vel."
    },
    {
        id: 4,
        question: "What will be dlivered? And When?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, vel.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, vel."
    },
    {
        id: 5,
        question: "Can I try a chair before purchasing?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, vel.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, vel."
    },
    {
        id: 6,
        question: "How do I clean and maintain my Comforty chair?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, vel.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, vel."
    },
]






function Faqs() {


  return (
    <div className='flex flex-col mx-auto items-center justify-center my-8'>
        <h1 className='text-3xl font-bold py-5'>Questions Looks Here</h1>
        <h2 className='pb-10 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ipsam voluptate totam!</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
           {faqs.map((items, index) => {
            return(
                <div className='p-3 rounded-lg md:w-[40vw] w-96 bg-gray-100 ' key={index}>
                    <div className='flex justify-between transition-all'>
                        <h2 className='text-lg font-bold'>
                            {items.question}
                        </h2>
                        <button><BsPlus className='text-black text-3xl'/></button>
                        
                    </div>
                    <p className='mt-4 text-gray-500 '>
                        {items.answer}
                    </p>
                    
                </div>
            ) 
           })}
        </div>
    </div>
  )
}

export default Faqs