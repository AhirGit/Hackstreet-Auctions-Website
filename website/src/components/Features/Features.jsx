import React from 'react'
import Slider from 'react-slick';
import { featureContent } from './featureContent';
import buyImage from './resources/images/buyImage.png';
import bidImage from './resources/images/bidImage.png';
import virtualCurrencyImage from './resources/images/virtualCurrencyImage.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Features() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <main id='features'>
        <div className='container mx-auto my-30'>
          <div className='text-center text-5xl font-bold py-6'>
            <h1>
              Explore our features
            </h1>
          </div>
          <div>
            <Slider {...settings}>
              {featureContent.map((feature) => (
                <section className='px-12 bg-[#D3E7F5] rounded-xl text-black'>
                  <div className='grid grid-cols-1 md:grid-cols-2
                                  lg:grid-cols-2'>
                    {/* Text Container */}
                    <div className='py-11 lg:py-24'>
                      <h1 className="text-4xl lg:text-6xl font-bold text-shadow-black text-shadow-2xs">
                        {feature.title}
                      </h1>
                      <p className="py-4 text-lg lg:text-2xl leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                    {/* Image Container */}
                    <div className='px-3 py-10'>
                      <img src={feature.image} alt={feature.imageAlt} className='h-[200px] w-auto lg:h-[500px] rounded'/>
                    </div>
                  </div>
                </section>
              ))}
            </Slider>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Features
