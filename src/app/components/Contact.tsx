import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'data-aos="zoom-in">Get In touch</h2>
                <p className='text-gray-400 text-[18px] pt-2'data-aos="zoom-in">
                    Drop me a line, give me a call , or send me a masssage by submiting the form.
                </p>
                <div className='flex gap-3 items-center'data-aos="zoom-in">
                    < IoIosMail  size={30}/> xyz@gmail.com
                </div>
                <div className='flex gap-3 items-center'data-aos="zoom-in">
                    < BsFillTelephoneInboundFill  size={30}/> (021) 000-0000
                </div>
            </div>
            <div className='space-y-8'>
            <div className='flex flex-col gap-1'data-aos="zoom-in">
                <label htmlFor='name'>Name</label>
                <input type='text' className='h-[40px] bg-transparent border border-gray' id='name'></input>
               
            </div>
            <div className='flex flex-col gap-1'data-aos="zoom-in">
                <label htmlFor='email'>Email</label>
                <input type='text' className='h-[40px] bg-transparent border border-gray' id='email'></input>
               
            </div>
            <div className='flex flex-col gap-1'data-aos="zoom-in">
                <label htmlFor='msg'>Massage</label>
                <textarea 
                className=' bg-transparent border border-gray' id='msg' rows={8}></textarea>
               
            </div>
            <button className="bg-accent p-2 px-6"data-aos="zoom-in">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
