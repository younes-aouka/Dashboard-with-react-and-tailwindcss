import React from 'react'

function PageNotFound() {
  console.log('PageNotFound re-render');
  return (
  <section className=''>
    <p className='mt-3 text-3xl'>404: The page you loking for is not found or does not exist!</p>
  </section>
  )
}

export default PageNotFound