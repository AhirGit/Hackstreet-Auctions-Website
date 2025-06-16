// not used for now
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
                <iframe
                  className="w-full aspect-video rounded-xl shadow-lg"
                  src="https://www.youtube.com/embed/4E7aJd0aSoU"
                  title="Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
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
