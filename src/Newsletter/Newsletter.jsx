import React, { useState } from 'react'
import { image } from '../assets/assests'

const Newsletter = ({closenewsletter}) => {
    const [email, setEmail] = useState("");
    const [notshow, setNotshow] = useState(false);

    const formsubmit = (e) => {
        e.preventDefault();

const subscription = {email,notshow};

let store = JSON.parse(localStorage.getItem("new-sub"));
if(!Array.isArray(store)){
            store = store ? [store] : [];
        }
store.push(subscription)
localStorage.setItem("new-sub", JSON.stringify(store))
alert("Subscribed successfully");
closenewsletter();


    }

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50'>
        <div className='bg-white grid grid-cols-2 max-w-3xl  relative t'>
            <button className='absolute top-3 right-4 text-white text-xl ' onClick={closenewsletter}>X</button>
             <form onSubmit={formsubmit}>
            <div className='p-5 flex flex-col gap-5'>
               
                    <h1 className='text-2xl font-bold'>Sign Up For Send Newsletter</h1>
                <p className='text-sm text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio culpa labore molestias  velit doloremque velit doloremque.</p>
           

            <input type="text" 
            placeholder=' Enter Your Email'
            className='w-full bg-gray-200 h-10'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <button className='bg-black h-10 text-white w-full' type='submit'>Subscribe</button>

           <div className='flex gap-2'>
             <input type="checkbox" required 
             checked={notshow}
             onChange={(e) => setNotshow(e.target.checked)} />
            <label htmlFor="">Do not show again</label>
           </div>
             </div>
                </form>

             <div>
                <img src={image.Gal3} alt="" />
             </div>

        </div>
      
    </div>
  )
}

export default Newsletter
