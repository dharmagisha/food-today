import React from 'react'

const Pricing = () => {
    const pricing =
    {
        subhead: "PRINCING",
        head: "We have 2 pricing plans",
        boxhead1: "STARTED",
        boxhead2: "$399",
        pricepara1: "Pricing includes all applicable taxes.",
        pricepara2: "Users can cancel at any time",
        con1: "1 meal per day",
        con2: " Order from 11am and 9pm",
        con3: " Delivery is free",
        con4: ".",
        btn: "Shop Now"

    }

    const pricing2 =
    {
        boxhead1: "COMPLETE",
        boxhead2: "$599",
        pricepara1: "Pricing includes all applicable taxes.",
        pricepara2: "Users can cancel at any time",
        con2: " Order 24/7",
        con3: "Delivery is free",
        con4: " Get access to latest recipes",
        con1: "2 meals per day",
        btn: "Shop Now"

    }

    return (
        <div className='py-12 text-center'>
            <h3 className='text-orange-500 font-semibold uppercase tracking-wide'>{pricing.subhead}</h3>
            <h1 className='text-3xl font-bold mt-2'>{pricing.head}</h1>

            <div className='mt-10 flex gap-8 justify-center items-center '>
                <div className='w-70 bg-white border rounded-2xl shadow p-6 flex flex-col gap-6 border-amber-500' >
                    <p className='text-orange-500 font-bold'>{pricing.boxhead1}</p>
                    <p className='text-4xl font-bold '>{pricing.boxhead2}</p>
                    <div>
                        <p className='text-sm text-gray-500'>{pricing.pricepara1}</p>
                        <p className='text-sm text-gray-500'>{pricing.pricepara2}</p>
                    </div>

                    <div className='text-gray-700 text-left '>
                        <p>{pricing.con1}</p>
                        <p>{pricing.con2}</p>
                        <p>{pricing.con3}</p>
                        <p>{pricing.con4}</p>
                    </div>

                    <div>
                        <button className='w-30 bg-orange-500 text-white py-2 rounded-lg'>{pricing.btn}</button>
                    </div>
                </div>
                <div className='w-70 relative overflow-hidden bg-white border rounded-2xl shadow p-6 flex flex-col gap-6 border-amber-800' >
                    
                    <span className='absolute top-8 -right-0 bg-orange-500 text-white py-1  px-12  text-xs tranform rotate-45'>best sale</span>

                    <p className='text-orange-500 font-bold'>{pricing2.boxhead1}</p>
                    <p className='text-4xl font-bold '>{pricing2.boxhead2}</p>
                    <div>
                        <p className='text-sm text-gray-500'>{pricing2.pricepara1}</p>
                        <p className='text-sm text-gray-500'>{pricing2.pricepara2}</p>
                    </div>

                    <div className='text-gray-700 text-left '>
                        <p>{pricing2.con1}</p>
                        <p>{pricing2.con2}</p>
                        <p>{pricing2.con3}</p>
                        <p>{pricing2.con4}</p>
                    </div>

                    <div>
                        <button className='w-30 bg-orange-500 text-white py-2 rounded-lg'>{pricing.btn}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pricing
