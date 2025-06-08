import React from 'react'

function Postmortem() {
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
            <section className='px-12 bg-[#D3E7F5] rounded-xl text-black'>
              {/* Text Container */}
              <div className='px-3 py-10'>
                What was the overall architecture of your system (particularly if it is different from the demo system)?<br />
                What went right in the development process?<br />
                What went wrong in the development process?<br />
                What would you do differently, if you had the chance to start over?<br />
                How large is the project (number of methods, classes, etc)? How much of this is (roughly) devoted to each major system component? And any other quantifiables (e.g. if you have a record of hours spent on tasks).<br />
                What took the most time? The least? Any surprises?<br />
                Are there any particular design smells, or brilliant design decisions?<br />
                Are there any outstanding bugs?<br />
                Did any features work better than expected?<br />
                Are you using any technologies other than what was required (e.g. JMock, GUI builders, etc.)?<br />
                Are you using any specific techniques covered in the course (TDD, pair programming, scrums, etc)?<br />
                How did the project change from your initial (iteration 0) vision or stories, or did it work out as predicted?<br />
                What did you learn about team or large project development? What will you start doing, keep doing, or stop doing next time?<br />
                Can you draw any conclusions from what you’ve done?
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Postmortem
