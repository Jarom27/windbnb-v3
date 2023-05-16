import {useContext, useEffect, useRef, useState} from 'react'
import SearchContext from '../context/SearchContext'
import ListCities from './ListCities';
import { MdSearch } from 'react-icons/md';
import GuestsControls from './GuestsControls';

export default function ModalSearchBar() {
    const [location,setLocation] = useState([]);
    const [guess,setGuess] = useState(99)
    const {setMaxGuests,setCity,setCountry,setFiltered,setModal,isLocation,setIsLocation} = useContext(SearchContext);
    const locationInput = useRef()
    
    useEffect(()=>{
        locationInput.current.value = location.toString()
    },[location])
    function handleLocation(e){
        let position = e.target.value.split(",")
        setLocation(position)
    }
    function handleGuess(e){
        setGuess(parseInt(e.target.value))
        console.log(guess)
    }
    function handleClick(){
        console.log(location);
        setCity(location[0])
        setCountry(location[1].trim())
        setMaxGuests(guess);
        setFiltered(true);
        setModal(false)
    }
    return (
        <>
            {/*Vista movil */}
            <div className='w-full h-full lg:hidden'>
                <div className='flex flex-col' >
                    <div>
                        <p className='font-bold text-left'>Edit your search</p>
                        <div className='shadow-md rounded-2xl p-2'>
                            <input ref={locationInput} type = "text" placeholder="Add location" className="outline-black focus:ring-black w-full p-3 mb-1"onClick={()=>setIsLocation(true)} onKeyUp={handleLocation}></input>
                            <input type = "text" placeholder="Add guests" onClick={()=>setIsLocation(false)} className="focus:ring-black w-full p-3" onKeyUp={handleGuess}></input>
                        </div>
                    </div>
                    {isLocation ? <ListCities location={setLocation}></ListCities> : <GuestsControls></GuestsControls>}
                    <div className='self-end flex justify-center ' style={{"marginTop" : "10rem"}}>
                        <button className='bg-rose-600 p-2 px-4 text-white border-spacing-0 rounded-2xl flex align-middle' onClick={handleClick}><span className='inline-block'><MdSearch className='w-10 h-6'></MdSearch></span>Submit</button>
                    </div>
                </div>
            </div>
            
            {/*Vista Desktop */}
            <div className='hidden lg:flex flex-col'>
                <div className=" lg:grid grid-cols-3 w-full p-3 shadow-sm rounded-md">
                    <input ref={locationInput} type = "text" placeholder="Add location" className="ring-black me-1" onClick={()=>setIsLocation(true)} onKeyUp={handleLocation}></input>
                    <input type = "text" placeholder="Add guests" className="ring-black" onClick={()=>setIsLocation(false)} onKeyUp={handleGuess}></input>
                    <div className='flex justify-center'><button className='bg-rose-600 p-2 px-4 text-white border-spacing-0 rounded-2xl flex align-middle' onClick={handleClick}><span className='inline-block'><MdSearch className='w-10 h-6'></MdSearch></span>Submit</button></div>
                </div>
                {isLocation ? <ListCities location={setLocation}></ListCities> : <GuestsControls number={guess} guests={setGuess}></GuestsControls>}
            </div>
        </>
        
    )
}
