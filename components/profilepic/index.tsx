import React, { useEffect, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Skeleton } from '@mui/material';
function ProfilePic() {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsImageLoaded(true);
        }, 1500)
    })
    return (

        <div className="h-64 w-64 rounded-2xl overflow-hidden flex justify-center items-center relative">

            <>
                <Skeleton sx={{ bgcolor: 'grey.700' }} className='h-full w-full rounded-2xl overflow-hidden' variant="rectangular" />
                <PersonIcon className='text-white absolute h-32 w-32 ' />
            </>
            <img src="https://res.cloudinary.com/dpjkblzgf/image/upload/v1651177190/IMG_20211125_154035_emkl3v.jpg" className='h-full w-full object-cover object-left-top absolute scale-100 hover:scale-110 duration-500 ease-in-out' style={{ display: isImageLoaded ? 'block' : 'none' }} alt="profile pic" />
        </div>

    )
}

export default ProfilePic