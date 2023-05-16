/* eslint-disable react/prop-types */
import '../fonts.css'
import SuperHost from "./SuperHost";


export default function Card({stay}) {
   
    return (
        <article className={"rounded-lg font-thin"}>
            <div className="w-100 h-fit">
                <img src={stay.photo} className="rounded-lg aspect-[6/4] object-cover w-full "></img>
            </div>
            <div className="mt-3">
                <div className="mb-2 text-left">
                    {stay.superHost && <SuperHost></SuperHost>}
                    <span className="text-neutral-500">{stay.type}. {stay.type == 'Entire apartment' && stay.beds != null ? stay.beds + ' beds' : ''}</span><span></span>
                </div>
                <div>
                    <h1 className="Montserrat font-bold text-left">{stay.title}</h1>
                </div>
            </div>
        </article>
    )
}
