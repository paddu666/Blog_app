import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';


export default function CallToAction() {
 
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                People's Blog
            </h2>
            <p className='text-gray-500 my-2'>
            The beautiful part of writing is that you don't have to get it right the first time, unlike, say, a brain surgeon
            </p>
           
            <Link to='/about'>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none mx-auto'>
           
            
            About Creator

            
          </Button>
          </Link>
            
        </div>
        <div className="p-7 flex-1">
            <img className='rounded-md h-95' src="https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?w=826&t=st=1719409881~exp=1719410481~hmac=cb76afa088b18323d3856f3b2a1126767bfb183e07b12599f3fad174860f39d4" />
        </div>
    </div>
  )
}