import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    IconComponent:ReactNode;
    Text:string;
    URL:string;
}

const LinkButton = ({ Text, IconComponent, URL } : Props) => {
    return (
        <Link to={URL} className='flex w-full p-2 text-sm'>
            <div className='w-4 h-4 mt-0.5 mr-2'>
                {IconComponent}
            </div>
            {Text}
        </Link>
    )
}

export default LinkButton