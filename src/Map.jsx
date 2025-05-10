
const Map = () => {
  console.log('Map re-render');
  return (
    <section className=''>
      <p className='mt-3'>Map</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102238.18999862375!2d5.667241837989811!3d36.79590652916862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f2607b906c8443%3A0xbd2f0be4585c67dc!2sJijel!5e0!3m2!1sen!2sdz!4v1746782113226!5m2!1sen!2sdz" className='w-full h-[500px] main-br'  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}

export default Map