import { MdPlace } from "react-icons/md"
export default function ListCities({location}) {
  function handleLocation(e){
    let position = e.target.textContent.split(",");
    location(position)
  }
  return (
    <ul className="mt-8 flex flex-col gap-6 justify-start text-left">
        <li className="font-semibold text-neutral-700" onClick={handleLocation}><span className="inline-block"><MdPlace></MdPlace></span>Helsinki, Finland</li>
        <li className="font-semibold text-neutral-700" onClick={handleLocation}><span className="inline-block"><MdPlace></MdPlace></span>Turku, Finland</li>
        <li className="font-semibold text-neutral-700" onClick={handleLocation}><span className="inline-block"><MdPlace></MdPlace></span>Oulu, Finland</li>
        <li className="font-semibold text-neutral-700" onClick={handleLocation}><span className="inline-block"><MdPlace></MdPlace></span>Vaasa, Finland</li>
    </ul>
  )
}

