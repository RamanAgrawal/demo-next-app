import React, { FC, useState } from 'react'
import Image from "next/image";


interface Thumbnail {
  fields: {
    file: {
      url: string;
    };
  };
}

interface CardProps {
  value: {
    title: string;
    date: string;
    description: string;
    thumbnail: Thumbnail;
  };
}
const Card: FC<CardProps> = ({ value }) => {

  // Todo:can add a feature ,when user click on a card a new box open below cards with details of cards

  // State to control whether to show more content
  const [show, setShow] = useState<boolean>(false)

  // Extracting and formatting the date from the prop
  const datetimeString = value.date;
  const date = new Date(datetimeString);
  const dateString = date.toISOString().split('T')[0];

  return (
    <div className='w-60 bg-gray-600 p-2 rounded-md max-h-96 overflow-hidden '>

      {/* Image fetched from Contentful */}
      <Image
        src={`https:${value.thumbnail.fields.file.url}`}
        alt={`Thumbnail for ${value.title}`}
        width={250}
        height={100}
      />

      <h3>{dateString}</h3>
      <h4 className='text-lg text-black font-bold'>{value.title}</h4>

      {/* Show the description if 'show' state is true */}
      {show && <p className='max-h-24 overflow-y-scroll'>{value.description}</p>}

      {/* Button to toggle the 'show' state */}
      <button className='text-black hover:text-white' onClick={() => setShow(!show)}>{show?"Hide":"Show more"}</button>
    </div>
  )
}

export default Card