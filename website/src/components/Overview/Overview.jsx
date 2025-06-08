import React, { useState } from 'react';
import { overviewContent } from './overviewContent';
import logo from './resources/images/appHome.png';
import fastIcon from './resources/icons/fastIcon.png';
import trustedIcon from './resources/icons/trustedIcon.png';
import uniqueFindIcon from './resources/icons/uniqueFindIcon.png';

function Overview() {
  const [showFullVision, setShowFullVision] = useState(false);

  const visionShortText = overviewContent.vision.slice(0, 588);

  return (
    <div>
      <main id='overview'>
        <section className='container mx-auto px-8
         bg-[#D3E7F5] rounded-xl text-black'>
          <div className='grid grid-cols-2 md:grid-cols-2
                          lg:grid-cols-2'>
            {/* Text Container */}
            <div className='py-11'>
              <h1 className="text-4xl lg:text-6xl font-bold text-shadow-black text-shadow-2xs">
                {overviewContent.intro.title}
              </h1>
              <p className="py-4 text-lg lg:text-2xl leading-relaxed">
                {overviewContent.intro.text}
              </p>
            </div>
            {/* Image Container */}
            <div className='px-3 py-10'>
              <img src={logo} alt="Hackstreet Auction" 
              className='max-w-md w-full h-auto rounded-4xl mx-auto' />
            </div>
          </div>
        </section>
        <section className='container mx-auto px-8 py-18 text-blackn'>
          <div className="grid grid-cols-3 md:grid-cols-3 
                        gap-8 items-center text-center">
            {/* Highlight Icons */}
            {overviewContent.highlights.map((highlight) => (
              <div>
                <img src={highlight.image} alt={highlight.imageAlt}
                  className="mx-auto mb-4 h-30 w-30 rounded-full transition transform hover:scale-130 hover:-translate-y-10 duration-500" />
                <p className="text-lg font-semibold">{highlight.title}</p>
              </div>
            ))}
          </div>
        </section>
        <section className='container mx-auto px-8
         bg-[#D3E7F5] rounded-xl text-black'>
          <div className='py-5'>
            <h1 className='text-2xl text-center font-bold'>
              Vision Statement
            </h1>
            <p className='leading-relaxed whitespace-pre-line'>
              {showFullVision ? overviewContent.vision : `${visionShortText}...`}
            </p>
            <div className='text-center mt-4'>
              <button
                onClick={() => setShowFullVision(!showFullVision)}
                className='text-primary font-semibold cursor-pointer'
              >
                {showFullVision ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Overview
