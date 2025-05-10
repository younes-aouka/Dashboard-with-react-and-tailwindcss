import Layer from './Layer'
import React from 'react'

function DeleteWorker({setDelete,chosenWorker}) {
  return (
    <Layer>
        <article className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
         bg-white main-br py-5 px-9 flex flex-col gap-5 font-semibold'>
            <div className='mx-auto'>
                <img src={chosenWorker.avatar} alt='' className='size-[120px] main-br object-cover' />
            </div>
            <div className='flex items-center gap-2'>
                <div className=''>Name:</div>
                <div className='rounded-[4px] p-1'>{chosenWorker.name}</div>
            </div>
            <div className='flex items-center gap-2'>
                <div className=''>Email:</div>
                <div className='rounded-[4px] p-1'>{chosenWorker.email}</div>
            </div>
            <div className='flex items-center gap-2'>
                <div className=''>Worker Field:</div>
                <div className='rounded-[4px] p-1'>{chosenWorker.workerField}</div>
            </div>
            <div className='flex items-center gap-2'>
                <div className=''>Employed:</div>
                <div className='rounded-[4px] p-1'>{chosenWorker.Employed}</div>
            </div>
            <p>Are you short you want to delete this worker ?</p>
            <div className='flex justify-around text-white'>
                <button type='button' className='px-3 py-1 bg-red-500 text-white  rounded-[4px]'>Delete</button>
                <button type='button' onClick={()=>{setDelete(false)}} className='px-3 py-1 bg-special-txt-color/70
                 rounded-[4px]'>Concel</button>
            </div>
        </article>
    </Layer>
  )
}

export default DeleteWorker