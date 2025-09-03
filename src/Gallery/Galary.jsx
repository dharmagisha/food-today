import React from 'react'
import { image } from '../assets/assests'

const Galary = () => {

    const gallery = [
        {
            title:"Meals",
            heading:"Daily Ongoing Meals !!!",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illum possimus ipsa atque impedit magnam necessitatibus hic in error modi nam, natus molestiae laborum, facere aliquid expedita fugit. Nemo, beatae!",
            meals: [
                {
                    image1: image.Gal1,
                    image2: image.Gal2,
                    image3: image.Gal3,
                    image4: image.Gal4,
                    image5: image.Gal5
                }

            ]
        }
    ]
  return (
   <section id='galary'>
     <div className='bg-orange-50 py-5'>
        <div className='w-full pr-3 ps-14'>
            {gallery.map((gall) => (
                <div className='grid grid-cols-2  items-start'>
                <div className='mt-11 '>
                    <div>
                        <p className=' font-bold text-orange-500 uppercase' style={{fontSize:"12px"}}>{gall.title}</p>
                        <p className='text-3xl  text-gray-600 mb-6' style={{fontWeight:"600"}}>{gall.heading}</p>
                        <p className='w-full text-sm text-gray-600' style={{width:"500px"}}>{gall.description}</p>
                    </div>
                </div>
                 <div className='grid grid-cols-3 gap-3 w-full'>
                    {gall.meals.map((mealgal) => (
                        <>
                        <img src={mealgal.image1} className='rounded-lg object-cover w-full h-50' alt="" />
                        <img src={mealgal.image2} className='rounded-lg object-cover w-full h-50' alt="" />
                        <img src={mealgal.image3}className='rounded-lg object-cover w-full h-50' alt="" />
                        <img src={mealgal.image4} className='rounded-lg object-cover w-full h-50' alt="" />
                        
                        <img src={mealgal.image5} className='rounded-lg object-cover w-full h-50' alt="" />
                        <img src={mealgal.image5} className='rounded-lg object-cover w-full h-50' alt="" />
                        </>
                    ))}
                 </div>

                </div>
            ))}
        </div>
      
    </div>
   </section>
  )
}

export default Galary
