import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Form from '../components/Form.jsx'

const Footer = () => {
  return (
    <div className='justify-center m5-3 p-5'>
        <h1 className='text-4xl bold text-center mt-5'>Connect with me:</h1>
        <Form/>
<span> <SocialIcon url='https://github.com/arbertotraku' target='_blank'/> </span>
<span> <SocialIcon url='https://linkedin.com/in/arbertotraku 'target='_blank'/> </span>
<span> <SocialIcon url='https://wa.me/4917630460502' target='_blank'/> </span>
    </div>
  )
}

export default Footer