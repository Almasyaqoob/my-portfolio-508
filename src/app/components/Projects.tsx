import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data =[
    
{
    id:0,
    title:"Calculator",
    desc:"A React & TypeScript based app for managing and organizied",
    img:'/banner_bg.png',
    tags:["React","Node","CSS","Next.js"],
},
{
  id:1,
  title:"ATM",
  desc:"A React & TypeScript based app for managing and organizied",
  img:'/banner_bg.png',
  tags:["React","Node","CSS","Next.js"],
},
{
  id:2,
  title:"Counter",
  desc:"A React & TypeScript based app for managing and organizied",
  img:'/banner_bg.png',
  tags:["React","Node","CSS","Next.js"],
},
{
  id:3,
  title:"Todo List",
  desc:"A React & TypeScript based app for managing and organizied",
  img:'/banner_bg.png',
  tags:["React","Node","CSS","Next.js"],
}
]



const Projects = () => {
  return (
    <div id='projects' className='container pt-32' >
        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) =>(<Card
            key={el.id}
            img= {el.img}
            desc={el.desc}
            title={el.title}
            tags={el.tags}
            />))}
        </div>
      
    </div>
  )
}

export default Projects
