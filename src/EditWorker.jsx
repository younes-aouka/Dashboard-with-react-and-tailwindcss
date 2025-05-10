import {useState} from 'react'
import Layer from './Layer'
import { PenBoxIcon } from 'lucide-react';

const EditWorker = ({setEdit,chosenWorker}) => {
    const [preview, setPreview] = useState(chosenWorker.avatar);//for showing the new img for ui before saving
    const handleChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const tempUrl = URL.createObjectURL(file);
        setPreview(tempUrl);
    }
    }
  return (
    <Layer>
    <form className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white main-br py-5 px-9 flex flex-col gap-6'>
        <label className='mx-auto relative'>
          <input type="file" className='hidden' onChange={handleChange}/>
          <img src={preview} alt="" className='size-[120px] main-br cursor-pointer object-cover' />
          <PenBoxIcon className='size-6 stroke-black absolute top-1 right-1'/>
        </label>
        <div className='flex items-center gap-2'>
          <label htmlFor="" >NAME:</label>
          <input type="text" defaultValue={chosenWorker.name} className='main-b rounded-[4px] p-1' />
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor="">EMAIL:</label>
          <input type="email" defaultValue={chosenWorker.email} className='main-b rounded-[4px] p-1'/>
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor="">FIELD:</label>
          <select defaultValue={(chosenWorker.workerField==='cook'?'cook':'waiter')} className='flex-grow main-b rounded-[4px] p-1'>
            <option value="cook">cook</option>
            <option value="waiter" >waiter</option>
          </select>
        </div>
        <div className='flex justify-around font-semibold'>
          <button type="submit" className='px-3 py-1 bg-main-color text-white  rounded-[4px]'
          onClick={(e)=>{e.preventDefault()}}>SAVE</button>
          <button type='button' className='px-2 py-1 bg-red-500 text-white  rounded-[4px]'
          onClick={()=>{chosenWorker=null;setEdit(false)}}>CONCEL</button>
        </div>
    </form>
  </Layer>
  )
}

export default EditWorker