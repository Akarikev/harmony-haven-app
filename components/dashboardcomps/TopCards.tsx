/* eslint-disable react/no-unescaped-entities */
'use client'

import  {useQuote } from '@/hooks/useQuotes'
import React from 'react'

const TopCards = () => {

    const  quotes =  useQuote()
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4' suppressHydrationWarning>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-2 rounded-lg shadow-lg'>
            
            <div className='flex flex-col w-full pb-2'>
            <blockquote className="mt-4 border-l-2 pl-4 italic">
                    {quotes.quote}
                </blockquote>
                <p className='text-gray-600 text-right text-medium'>{quotes.author}</p>
            </div>
            {/* <p className='bg-green-200 flex justify-center items-center  rounded-lg'>
                <span className='text-green-700 text-sm'>+60 upvotes</span>
            </p> */}
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$1,437,876</p>
                <p className='text-gray-600'>YTD Revenue</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+11%</span>
            </p>
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>11,437</p>
                <p className='text-gray-600'>Customers</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+17%</span>
            </p>
        </div>
    </div>
  )
}

export default TopCards