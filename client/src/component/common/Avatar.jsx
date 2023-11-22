import Image from 'next/image'
import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa';
import ContextMenu from './ContextMenu';
import PhotoPicker from './PhotoPicker';

const Avatar = ({ type, image, setImage }) => {
    const [hover, setHover] = useState(false);
    const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
    const [contextMenuCord, setContextMenuCord] = useState({ x: 0, y: 0 });
    const showContextMenu = (e) => {
        e.preventDefault();
        setIsContextMenuVisible(true);
        setContextMenuCord({ x: e.pageX, y: e.pageY });
    }

    const [grabPhoto, setGrabPhoto] = useState(false);

    const contextMenuOptions = [
        {name: "Take photo", callback: () => {
            console.log("take photo")
        }},
        {name: "Choose from Library", callback: () => {
            console.log("Choose from Library")
        }},
        {name: "Upload a photo", callback: () => {
            console.log("upload photo")
            setGrabPhoto(true);
        }},
        {name: "Remove photo", callback: () => {
            console.log("remove photo");
            setImage("default_avatar.png");
        }},

    ]

    const photoPickerChange = () => {
        console.log("photoPickerChange");
    }

    return (
        <>
            <div className='flext items-center justify-center'>
                {type === "sm" &&
                    <div className="relative h-10 w-10">
                        <Image src={image} alt='avatar' className='rounded-full' fill />
                    </div>
                }
                {type === "lg" &&
                    <div className="relative h-14 w-14">
                        <Image src={image} alt='avatar' className='rounded-full' fill />
                    </div>
                }
                {type === "xl" &&
                    <div className='relative cursor-pointer'
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        {hover && <div className={`bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 
                    flex items-center rounded-full justify-center flex-col text-center gap-2 z-10`}
                            onClick={(e) => showContextMenu(e)}
                            id='context-opener'
                        >
                            <FaCamera className='text-2xl' id='context-opener' onClick={(e) => showContextMenu(e)} />
                            <span onClick={(e) => showContextMenu(e)} id='context-opener'>Change profile photo</span>
                        </div>}

                        <div className="h-60 w-60 z-0">
                            <Image src={image} alt='avatar' className='rounded-full' fill />
                        </div>
                    </div>
                }
            </div>
            {
                isContextMenuVisible &&
                <ContextMenu
                    options={contextMenuOptions}
                    cordinates={contextMenuCord}
                    contextMenu={isContextMenuVisible}
                    setContextMenu={setIsContextMenuVisible}
                />
            }
            {
                grabPhoto && <PhotoPicker onChange={photoPickerChange} />
            }
        </>
    )
}

export default Avatar
