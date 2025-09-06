import React, { useState } from 'react'
import './Signup.css'
import { image } from '../assets/assests'

const Signup = ({isopen, close}) => {
   if(!isopen) return null;

    const signtext = [
        {
            head: "Signup Get Your Meal",
            descrpt: "Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!",


            opt1: "Please Select",
            opt2: "option1",
            opt3: "option2",
            opt4: "option3",
            btn: "Submit"
        }
    ];

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        findUs:"Please Select"
    });

    const handlechge = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({...data,[name]: value}));
    }

    // const submit = (e) =>{
    //     localStorage.setItem("signup" , JSON.stringify(formData))
    //     alert("data saved")
    //     close();
    // }

      const submit = (e) =>{
        e.preventDefault();
        let store = JSON.parse(sessionStorage.getItem("signup"));

        if(!Array.isArray(store)){
            store = store ? [store] : [];
        }
        store.push(formData);
        sessionStorage.setItem("signup" , JSON.stringify(store))
        alert("data saved")
        close();
    }

    return (
        <div className='fixed inset-0  flex items-center justify-center z-[999]'>
            
            <div className='  justify-center items-center rounded-lg    relative z-[10000] w-[full] h-[340px]'>
                <div className='bg-[#e67e22]   flex gap-4 h-full w-[700px] rounded-lg'>
                    <button className='absolute top-4 right-4  text-white' onClick={close}>X</button>
                    <div className=' p-6'>
                        {signtext.map((text) => (
                        <>
                            <h1 className='text-3xl font-semibold mb-2'>{text.head}</h1>
                            <p className='text-sm sign_p'>{text.descrpt}</p>

                            <form onSubmit={submit} className='grid grid-cols-2 gap-3 items-center justify-center'>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='label_name'>Enter Name</label>
                                    <input type="text" placeholder='Enter Name' className='p-2 rounded text-black text-sm bg-white' 
                                    name='name'
                                    value={formData.name}
                                    onChange={handlechge}
                                    required
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='label_name'>Enter Email</label>
                                    <input type="text" placeholder='Enter Email' className='p-2 rounded text-black text-sm bg-white'
                                    name='email'
                                    value={formData.email}
                                    onChange={handlechge}
                                    required
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label htmlFor="" className='label_name'>Select Find Us</label>
                                    <select className='p-2 rounded text-black text-sm bg-white'
                                    name='findUs'
                                    value={formData.findUs}
                                    onChange={handlechge}
                                    >
                                        <option >{text.opt1}</option>
                                        <option >{text.opt2}</option>
                                        <option >{text.opt3}</option>
                                        <option >{text.opt4}</option>
                                    </select>
                                </div>

                                <button type='submit' className='bg-orange-900 text-white  px-5 h-7 rounded-xl mt-8'>{text.btn}</button>
                            </form>
                        </>
                    ))}
                    </div>
                     <div className='h-full w-[500px]'>
                    <img src={image.Eat} className='object-cover rounded-r-lg h-full w-full' alt="" />
                </div>
                    
                </div>

                
                
            </div>
            

        </div>
    )
}

export default Signup
