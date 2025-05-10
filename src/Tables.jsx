import {useRef, useState } from 'react'
import {clsx} from 'clsx';
import avatar1 from './images/avatar-01.png';
import avatar2 from './images/avatar-02.png';
import avatar3 from './images/avatar-03.png';
import avatar4 from './images/avatar-04.png';
import avatar5 from './images/avatar-05.png';
import avatar6 from './images/avatar-06.png';
import { Plus, Trash2 } from 'lucide-react';
import EditWorker from './EditWorker';
import AddWorker from './AddWorker';
import DeleteWorker from './DeleteWorker';


const Tables = () => {
  const [edit,setEdit] = useState(false);//this will control EditComponent toggling behaivior
  const [add,setAdd] = useState(false);//this will control AddComponent toggling behaivior
  const [Delete,setDelete] = useState(false);//this will control DeleteWorker toggling behaivior
  let chosenWorker = useRef(0);//for editing worker info(need to be declared like this because preview state in EditWorker component trigger re-render when worker photo change so we need to preserve worker data accross)
  const TheWorkers = [
    {
      'name': 'younes',
      'id': '1',
      'workerField': 'cook',
      'avatar': avatar1,
      'email': 'MyEmail@Service.com',
      'Employed': '03/05/2025',
      'Statu': true
    },
    {
      'name': 'mohamed',
      'id': '2',
      'workerField': 'cook',
      'avatar': avatar2,
      'email': 'MyEmail@Service.com',
      'Employed': '03/03/2025',
      'Statu': true
    },
    {
      'name': 'ali',
      'id': '3',
      'workerField': 'cook',
      'avatar': avatar3,
      'email': 'MyEmail@Service.com',
      'Employed': '03/01/2025',
      'Statu': false
    },
    {
      'name': 'bassam',
      'id': '4',
      'workerField': 'cook',
      'avatar': avatar4,
      'email': 'MyEmail@Service.com',
      'Employed': '03/02/2025',
      'Statu': true
    },
    {
      'name': 'sifo',
      'id': '5',
      'workerField': 'waiter',
      'avatar': avatar4,
      'email': 'MyEmail@Service.com',
      'Employed': '03/05/2025',
      'Statu': false
    },
    {
      'name': 'mo3taze',
      'id': '6',
      'workerField': 'waiter',
      'avatar': avatar1,
      'email': 'MyEmail@Service.com',
      'Employed': '03/03/2025',
      'Statu': true
    },
    {
      'name': 'ali',
      'id': '7',
      'workerField': 'waiter',
      'avatar': avatar5,
      'email': 'MyEmail@Service.com',
      'Employed': '03/01/2025',
      'Statu': true
    },
    {
      'name': 'samyi',
      'id': '8',
      'workerField': 'waiter',
      'avatar': avatar6,
      'email': 'MyEmail@Service.com',
      'Employed': '03/02/2025',
      'Statu': true
    },
  ];
  console.log('Tables re-render');
  return (
    <section className=''>
      <h2 className='my-3 font-semibold'>Tables</h2>
      {/* EditWorker component */}
      {edit&&<EditWorker setEdit={setEdit} chosenWorker={chosenWorker.current}/>}
      {/* AddWorker component */}
      {add&&<AddWorker setAdd={setAdd} />}
      {/* DeleteWorker component */}
      {Delete&&<DeleteWorker setDelete={setDelete} chosenWorker={chosenWorker.current} />}
      {/* Cooks workers table */}
      <div className='py-3 px-2 bg-white main-br overflow-x-scroll mb-4'>
        <table className='w-full min-w-[700px]'>
          <caption className='text-left pl-4 font-bold text-xl'>Cooks Table</caption>
          <thead>
            <tr className='border-b border-gray-200'>
              <th className='py-4 px-4 text-left text-special-txt-color'>WORKER</th>
              <th className='py-4 px-4 text-left text-special-txt-color'>Employed</th>
              <th className='py-4 px-4 text-left text-special-txt-color'>STATU</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='font-semibold text-lg'>
            {
              TheWorkers.map((worker)=> {
                if(worker.workerField!='cook') return null;
                return (
                <tr key={worker.id} className='border-b border-gray-200'>
                  {/* worker image + name + email */}
                  <td className='py-4 px-4 flex items-center'>
                    <img src={worker.avatar} alt='alt' className='size-14 mr-3 main-br object-cover'/>
                    <div>
                      <p>{worker.name}</p>
                      <p>{worker.email}</p>
                    </div>
                  </td>
                  {/* worker employment date */}
                  <td className='py-4 px-4'>
                    {worker.Employed}
                  </td>
                  {/* worker statu */}
                  <td className='py-4 px-4 text-white'>
                    <span className={clsx('p-1 main-br',(worker.Statu?'bg-main-color':'bg-gray-400'))}>
                      {worker.Statu===true?'online':'offline'}
                    </span>
                  </td>
                  {/* edit button */}
                  <td className=''>
                    <button type='button' className='py-2 px-2 text-special-txt-color hover:text-white hover:bg-special-txt-color main-br'
                      onClick={()=>{
                        chosenWorker.current = worker;
                        setEdit(true);
                      }}
                    >Edit</button>
                  </td>
                  {/* delete button */}
                  <td className='py-2 px-2'>
                    <button type="button" onClick={()=>{
                      chosenWorker.current=worker;
                      setDelete(true);
                    }}>
                      <Trash2 className='size-6 stroke-red-500'/>
                    </button>
                  </td>
                </tr>
              )
              })
            }
          </tbody>
        </table>
      </div>
      {/* waiters wokers table */}
      <div className='py-3 px-2 bg-white main-br overflow-x-scroll'>
        <table className='w-full min-w-[700px]'>
          <caption className='text-left pl-4 font-bold text-xl'>Waiters Table</caption>
          <thead>
            <tr className='border-b border-gray-200'>
              <th className='py-4 px-4 text-left text-special-txt-color'>WORKER</th>
              <th className='py-4 px-4 text-left text-special-txt-color'>Employed</th>
              <th className='py-4 px-4 text-left text-special-txt-color'>STATU</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='font-semibold text-lg'>
            {
              TheWorkers.map((worker)=>{
                if(worker.workerField!='waiter') return null;
                return (
              <tr key={worker.id} className='border-b border-gray-200'>
                {/* worker image + name + email */}
                <td className='py-4 px-4 flex items-center'>
                  <img src={worker.avatar} alt='alt' className='size-14 mr-3 main-br object-cover'/>
                  <div>
                    <p>{worker.name}</p>
                    <p>{worker.email}</p>
                  </div>
                </td>
                {/* worker employment date */}
                <td className='py-4 px-4'>{worker.Employed}</td>
                {/* worker statu */}
                <td className='py-4 px-4 text-white'>
                  <span className={clsx('p-1 main-br',(worker.Statu?'bg-main-color':'bg-gray-400'))}>
                    {worker.Statu===true?'online':'offline'}
                  </span>
                </td>
                {/* edit button */}
                <td className=''>
                  <button type='button' className='py-2 px-2 text-special-txt-color hover:text-white hover:bg-special-txt-color main-br'
                  onClick={()=>{
                    chosenWorker.current = worker;
                    setEdit(true);
                  }}>Edit</button>
                </td>
                {/* delete button */}
                <td className='py-2 px-2'>
                  <button type="button" onClick={()=>{
                    chosenWorker.current=worker;
                    setDelete(true);
                  }}>
                    <Trash2 className='size-6 stroke-red-500'/>
                  </button>
                </td>
              </tr>
                )}
              )
            }
          </tbody>
        </table>
      </div>
      {/* Add new worker button */}
      <button type="button" onClick={()=>{setAdd(true)}} className='p-3 bg-main-color fixed right-8 bottom-4 main-br'>
        <Plus className='size-6 stroke-white'/>
      </button>
    </section>
  )
}

export default Tables