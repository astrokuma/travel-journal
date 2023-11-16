import { MapPinIcon } from '@heroicons/react/24/solid'

export default function TravelCard({entry}) {
    const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = entry

    return (
        <div className="flex flex-col md:flex-row items-center mx-auto w-full max-w-lg md:max-w-4xl bg-stone-50 shadow-xl rounded-xl transition-all">
            <img src={imageUrl} className='w-full md:max-w-[15em] h-72 object-cover rounded-t-lg md:rounded-r-none md:rounded-bl-lg border-b-8 md:border-b-0 md:border-r-8 border-rose-500'/>
            <div className='flex flex-col gap-2 w-full p-8'>
                <div className='flex flex-row items-center gap-1'>
                    <MapPinIcon className='w-5 h-5 text-rose-500' />
                    <p className='uppercase tracking-wider'>{location}</p>
                    <a href={googleMapsUrl} className='ml-auto text-slate-500 underline'>View Map</a>
                </div>
                <h2 className='text-3xl font-bold mb-2'>{title}</h2>
                <p className='font-semibold'>{startDate} - {endDate}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}