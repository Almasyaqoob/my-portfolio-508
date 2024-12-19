import React from 'react'

function Skills() {
  return (
    <div id='skills' className=' pt-32 container'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in">
          <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
          <p className='text-black-500 pt-2'>
            Technology has revolutionized the way we live, work, and interact with the world around us. From smartphones and artificial intelligence to renewable energy and advanced healthcare systems, technological advancements have become an integral part of modern life. They have enhanced communication, improved productivity, and opened new avenues for learning and entertainment. Moreover, technologies like automation and machine learning are transforming industries, making processes more efficient and reliable. While these innovations bring numerous benefits, they also raise challenges such as cybersecurity threats, ethical concerns, and environmental impacts. Striking a balance between progress and responsibility is essential as we continue to explore the limitless potential of technology.</p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-gray text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in">TypeScript</h2>
              <h2 data-aos="zoom-in">React</h2>
              <h2 data-aos="zoom-in">Next.js</h2>

            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in">Tailwind</h2>
              <h2 data-aos="zoom-in">CSS</h2>
              <h2 data-aos="zoom-in">Node.js</h2>

            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
