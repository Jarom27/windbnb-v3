import { useEffect, useState } from "react"

export default function GuestsControls({number,guests}) {
    const [counter,setCounter] = useState(0)
    let [adults,setAdults] = useState(0)
    let [childs,setChilds] = useState(0)
    useEffect(()=>{

    },[adults,childs])
    function decrementAdults(e){
        if(adults >0){
            let count = adults;
            setAdults(count--)
            console.log(adults)
        }
    }
    function increaseAdults(e){
        let count = adults;
        setAdults(count++)
        console.log(adults)
    }
    function decrementChildren(e){
        if(childs >0){
            let count = childs;
            setChilds(count--)
            console.log(childs)
        }

    }
    function increaseChildren(e){
        let count = childs;
        setChilds(count++)
        console.log(childs)
    }
    return (
        <div className="flex flex-col mx-auto align-middle justify-center gap-10">
            <div className=" flex flex-col justify-start">
                <p className="text-left Mulish font-semibold">Adults</p>
                <p className="text-left text-neutral-500 Mulish">Age 13 or above</p>
                <div className="flex justify-start">
                    <button className='w-5 mx-1 outline outline-1 outline-offset-0 outline-neutral-700 bg-white p-1 pt-0 h-fit text-neutral-700 rounded-sm' onClick={decrementAdults}>-</button>
                    <span>{adults}</span>
                    <button className='w-5 mx-1 outline outline-1 outline-offset-0 outline-neutral-700 bg-white p-1 pt-0 h-fit text-neutral-700 rounded-sm' onClick={increaseAdults}>+</button>
                </div>
            </div>
            <div className=" flex flex-col justify-start">
                <p className="text-left Mulish font-semibold">Children</p>
                <p className="text-left text-neutral-500 Mulish">Ages 2-12</p>
                <div className="flex justify-start">
                    <button className='w-5 mx-1 outline outline-1 outline-offset-0 outline-neutral-700 bg-white p-1 pt-0 h-fit text-neutral-700 rounded-sm' onClick={decrementChildren}>-</button>
                    <span>{childs}</span>
                    <button className='w-5 mx-1 outline outline-1 outline-offset-0 outline-neutral-700 bg-white p-1 pt-0 h-fit text-neutral-700 rounded-sm' onClick={increaseChildren}>+</button>
                </div>
                
            </div>
            
        </div>
    )
}
