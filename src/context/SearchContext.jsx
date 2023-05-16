/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

const SearchContext = createContext()
export function SearchProvider({children}) {
    const [city,setCity] = useState("Where are you going to go? ");
    const [country,setCountry] = useState("finland")
    const [modal, setModal] = useState(false);
    const [maxGuests,setMaxGuests] = useState(99)
    const [filtered,setFiltered] = useState(false)
    const [isLocation,setIsLocation] = useState(true)
    const info = {
        isLocation,
        modal,
        city,
        country,
        maxGuests,
        filtered,
        setIsLocation,
        setFiltered,
        setCountry,
        setModal,
        setMaxGuests,
        setCity
    }
    return (
            <SearchContext.Provider value={info}>
                {children}
            </SearchContext.Provider>
    )
}
export default SearchContext;