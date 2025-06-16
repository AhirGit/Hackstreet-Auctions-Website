import Slider from 'react-slick';
import linkedinIcon from './resources/icons/linkedinLogo.svg';
import githubIcon from './resources/icons/githubLogo.svg';
import { contributors } from './contributorContent';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Postmortem() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <main id='postmortem'>
        <div className='container mx-auto my-30'>
          <div className='text-center text-5xl font-bold py-6'>
            <h1>
              Postmortem
            </h1>
          </div>
          <div>
            <section className='container mx-auto px-8
            bg-[#D3E7F5] rounded-xl text-black'>
              <div className='py-5'>
                <h1 className='text-2xl text-center font-bold'>
                  Can you draw any conclusions from what you’ve done?
                </h1>
                <p className='leading-relaxed whitespace-pre-line'>
                  One important conclusion that we’ve learnt is that strong cohesion isn’t just about writing good code, it also describes a successful team. 
                  When each individual is able to play their part towards a common goal, we’re able to do great things. 
                  Part of what we think made us successful was our team chemistry. We were able to adapt to each other very quickly, eliminating a lot of overhead new teams often face. 
                  Not everything was smooth sailing, though. One challenge was adapting to each other’s individual circumstances. We each had differing schedules, work cycles, and work styles. 
                  Learning to adapt to these was an important challenge we had to face. By the end, though, we successfully learnt how to communicate our needs and be understanding to one another. 
                  By the end, we each genuinely grew into team players able to build something awesome.
                </p>
              </div>
              <div className='py-5'>
                <h1 className='text-2xl text-center font-bold'>
                  What took the most time? The least? Any surprises?
                </h1>
                <p className='leading-relaxed whitespace-pre-line'>
                  What took the most time is up for debate. Some of our early challenges revolved around learning to maintain good hygiene. 
                  I’m not talking about showers, but Git hygiene. Git was a new tool for half of our team, and for the other half with moderate experience at best. 
                  Learning how to create issues, document tasks dynamically, and time tracking was something unintuitive at the time. 
                  Iteration 2 had us taking a focus on keeping good hygiene, and by iteration 3 we were basically pros.
                </p>
                <br />
                <p className='leading-relaxed whitespace-pre-line'>
                  Bug fixes are definitely among the quickest things to address. That’s kinda how bugs are; They're quick and easy to write and so a lot of small, easy to fix bugs tend to pile up. 
                  When we did fix them, they were often one-liners. Of course, there are exceptions. I’m writing this paragraph to take a break from a 12 hour debugging session, so…
                </p>
                <br />
                <p className='leading-relaxed whitespace-pre-line'>
                  Most of the surprises were things that seem easy to do or are small enough that the actual can easily double or triple the estimates. 
                  Things such as implementing the database or making tests. These were also new concepts to us. They seemed easy in theory, so we would tend to underestimate them. 
                  When it came time to implement them, they would smack us in the face with errors and things burning down. 
                  Programming is masochistic, but hey, the rush when things are finally working is always worth it.
                </p>
              </div>
              <div className='py-5'>
                <h1 className='text-2xl text-center font-bold'>
                  What did you learn about team or large project development? What will you start doing, keep doing, or stop doing next time?
                </h1>
                <p className='leading-relaxed whitespace-pre-line'>
                  Organization makes your life easier. Just look at the difference between our first and second iterations. 
                  In iteration 1, we planned everything. We initialized our architecture diagram, delegated tasks, all that jazz. 
                  Things were smoother than… I don’t know, insert some smooth analogy here. Point is that there was zero friction. 
                  In our second iteration we took a more laid back approach. Let’s just say that things were a bit of a mess; 
                  Lot’s of merge conflicts, duplication of work, you name it. It wasn’t horrible, but we definitely learnt our lesson going into the final iteration.
                </p>
              </div>
              <div className='py-5'>
                <h1 className='text-2xl text-center font-bold'>
                  How did the project change from your initial (iteration 0) vision or stories, or did it work out as predicted?
                </h1>
                <p className='leading-relaxed whitespace-pre-line'>
                  Our project shifted in a number of ways from our initial vision, mostly because of time constraints that made us focus on building a stable core experience first. 
                  Early on, we had planned a lot more features around user interaction, trust, and navigation, but had to pair them back.
                  The item delivery feature was always considered low priority, and by iteration 3 we decided to drop it since any version we could make would feel pretty artificial. 
                  The private messaging system we had in mind for each auction was simplified into a global chat for each item, which fit our scope a lot better.
                  Our scam prevention system was also scaled back. We did manage to add a basic refunding system, but we weren’t able to build out the full idea we originally had. 
                  Account management ended up being very minimal where users log in with just a username, and there's no way to create accounts through the UI.
                  Other features like user profiles with descriptions and photos, ratings or comments on profiles, and item search didn’t make it in. 
                  Profiles now just show bidding history, and all auctions are displayed in one big unfiltered list.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className='w-full bg-cyan-800 text-white py-10'>
        <div className='container mx-auto lg:px-50'>
          <h1 className='text-2xl text-center font-bold mb-8'>Contributors & Project Experience</h1>
          <Slider {...settings}>
            {contributors.map((contributor) => (
              <div className='flex flex-col justify-between h-full px-35 py-5'>
                <div className='flex justify-between items-center mb-6'>
                  <h2 className='text-4xl font-bold'>
                    {contributor.name}
                    <div className='flex space-x-4 justify-center mt-2'>
                      <a href={contributor.github} target='_blank' rel='noopener noreferrer'>
                        <img src={githubIcon} alt='GitHub' className='w-10 h-10 hover:scale-115 transition' />
                      </a>
                      <a href={contributor.linkedin} target='_blank' rel='noopener noreferrer'>
                        <img src={linkedinIcon} alt='LinkedIn' className='w-10 h-10 hover:scale-115 transition' />
                      </a>
                    </div>
                  </h2>
                  <img src={contributor.profileImg} alt='Profile' className='w-40 h-40 rounded-full object-cover' />
                </div>

                <p className='italic text-center text-xl mt-auto'>
                  “{contributor.quote}”
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </footer>
    </div>
  )
}

export default Postmortem
