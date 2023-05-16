import {useContext, useState} from 'react'
import SearchContext from '../context/SearchContext'
import ListCities from './ListCities';
import { MdSearch } from 'react-icons/md';

export default function ModalSearchBar() {
    const [location,setLocation] = useState([]);
    const [guess,setGuess] = useState(99)
    const {setMaxGuests,setCity,setCountry,setFiltered,setModal} = useContext(SearchContext);
    function handleLocation(e){
        let position = e.target.value.split(",")
        setLocation(position)
    }
    function handleGuess(e){
        setGuess(parseInt(e.target.value))
        console.log(guess)
        
    }
    function handleClick(){
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
                <div className='flex flex-col  justify-between' >
                    <div>
                        <p>Edit your search</p>
                        <div className='shadow-md rounded-2xl p-2'>
                            <input type = "text" placeholder="Add location" className="outline-black focus:ring-black w-full p-3 mb-1" onKeyUp={handleLocation}></input>
                            <input type = "text" placeholder="Add guests" className="focus:ring-black w-full p-3" onKeyUp={handleGuess}></input>
                        </div>
                    </div>
                    <ListCities></ListCities>
                    <div className='flex justify-center'>
                        <button className='bg-rose-600 p-2 px-4 text-white border-spacing-0 rounded-2xl flex align-middle' onClick={handleClick}><span className='inline-block'><MdSearch className='w-10 h-6'></MdSearch></span>Submit</button>
                    </div>
                </div>
            </div>
            
            {/*Vista Desktop */}
            <div className='hidden lg:flex flex-col'>
                <div className=" lg:grid grid-cols-3 w-full p-3 shadow-sm rounded-md">
                    <input type = "text" placeholder="Add location" className="ring-black me-1" onKeyUp={handleLocation}></input>
                    <input type = "text" placeholder="Add guests" className="ring-black" onKeyUp={handleGuess}></input>
                    <div className='flex justify-center'><button className='bg-rose-600 p-2 px-4 text-white border-spacing-0 rounded-2xl flex align-middle' onClick={handleClick}><span className='inline-block'><MdSearch className='w-10 h-6'></MdSearch></span>Submit</button></div>
                </div>
                <ListCities></ListCities>
            </div>
        </>
        
    )
}
