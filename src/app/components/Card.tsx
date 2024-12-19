import React from 'react'
import Image from 'next/image';


interface PropsType{
    title: string;
    img: string;
    desc: string;
    tags: string[];

}

const Card :React.FC<PropsType>= ({ title, tags, img, desc }) => {
  return (
    <div className='border border-accent  w-[300px] sm:w-[350px]'data-aos="zoom-in">
        <div>
            <Image className='w-[300px] sm:w-[350px] h-auto'
              width={350}
              height={350}
              alt={title}   
              src={img}         />

        </div>


        <div className='p-4 sp-y-4'>
            <div className='text-4xl font-extralight'>{title}</div>
            <div>{desc}</div>
            <div>
                {tags.map((el) => (
                    <div className='tags'key={el} >

                    </div>))}
            </div>
        </div>

      
    </div>

  )
}

export default Card
