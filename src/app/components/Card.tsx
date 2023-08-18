import React, { FC, useState } from 'react'
import Image from "next/image";
interface MyComponentProps {
  value: any; // Add the value prop here
}
const Card = ({ value }: MyComponentProps) => {
  const [show, setShow] = useState<boolean>(false)
  const datetimeString = value.date;
  const date = new Date(datetimeString);
  const dateString = date.toISOString().split('T')[0];

  return (
    <div onClick={() => setShow(!show)} className='w-60 bg-gray-400 p-2 rounded-md'>
      <Image
        src={`https:${value.thumbnail.fields.file.url}`}
        alt={`Thumbnail for ${value.title}`}
        width={250}
        height={100}
      />
      {/* <img src={`https:${value.thumbnail.fields.file.url}`} width={250} alt="" /> */}
      <h3>{dateString}</h3>
      <h4 className='text-lg text-black font-bold'>{value.title}</h4>
      {show && <p>{value.description}</p>}
      <button>Show more</button>
    </div>
  )
}

export default Card