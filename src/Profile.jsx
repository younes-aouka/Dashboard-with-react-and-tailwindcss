import {useState} from 'react';
import profileBackground from './images/ProfileBackground.jpg';
import avatarDefault from './images/default_avatar.png';
import { PenBoxIcon } from 'lucide-react';
import Save from './Save';
import UserForm from './UserForm';

const Profile = () => {
  const [preview, setPreview] = useState(avatarDefault);//for showing the new img for ui before saving
  const [save,setSave] = useState(false);
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const tempUrl = URL.createObjectURL(file);
      setPreview(tempUrl);
      setSave(true);
    }
  }
  console.log('profile re-render');
  return (
    <section className=''>
      <h2 className='my-3 font-semibold'>Profile</h2>
      {save&&<Save setSave={setSave} setPreview={setPreview}/>}
      <img src={profileBackground} alt="Background layer" className='w-full h-[150px] main-br object-cover'/>
      <article className='-translate-y-[85px]'>
        <label className='relative inline-block left-1/2 -translate-x-1/2 '>
          <input type="file" className='hidden' accept="image/*" onChange={handleChange} />
          <img src={preview} alt="Avatar" className='size-[170px] rounded-full cursor-pointer object-cover' />
          <PenBoxIcon className='size-6 stroke-black absolute top-6 right-6'/>
        </label>
        <p className='text-center font-semibold text-lg'>Younes Aouka</p>
      </article>
      <UserForm />
    </section>
  )
}

export default Profile