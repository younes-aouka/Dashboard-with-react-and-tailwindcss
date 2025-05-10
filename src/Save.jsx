import avatarDefault from './images/default_avatar.png';
import Layer from './Layer';

const Save = ({setPreview,setSave}) => {

  return (
    <Layer >
        <div className='absolute bottom-11 left-1/2 -translate-x-1/2 flex gap-5 text-white font-semibold text-xl'>
            <button type="button" className='px-2 py-1 bg-green-600 main-br'>Save</button>
            <button type="button" onClick={()=>{
                setPreview(avatarDefault);
                setSave(false);
            }} className='px-2 py-1 bg-special-txt-color/70 main-br'>Concel</button>
        </div>
    </Layer>
  )
}

export default Save