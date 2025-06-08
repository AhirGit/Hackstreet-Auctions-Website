import React from 'react'
import catDemoVideo from './resources/videos/catDemoVideo.mp4';

function Demo() {
  return (
    <div>
      <main id='demo'>
        <div className='container mx-auto my-30'>
          <div className='text-center text-5xl font-bold py-6'>
            <h1>
              See how it works
            </h1>
          </div>
          <div>
            <section className='px-12 bg-[#D3E7F5] rounded-xl text-black'>
              {/* Video Container */}
              <div className='px-3 py-10'>
                <video 
                  src={catDemoVideo}
                  loop
                  controls 
                  className='w-auto h-auto rounded-xl shadow-lg'
                />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Demo
