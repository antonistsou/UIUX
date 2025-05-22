
const TryGrid = () => {
    return (
        <div className="grid items-center h-screen grid-cols-4 gap-10 justify-items-center">
            <div className='bg-red-500 size-10'></div>
            <div className='w-full col-span-2 bg-blue-500 size-10'></div>
            <div className='w-10 h-full row-span-3 mt-24 bg-white ' ></div>
            <div className=''></div>
            <div className='h-full bg-teal-500 size-10'></div>
            <div className='h-full bg-pink-500 size-10'></div>
            <div className='bg-fuchsia-500 size-10'></div>
            <div className='w-3/4 col-span-2 col-start-2 bg-fuchsia-300 size-10'></div>
            <div className='w-full h-10 col-span-4 bg-fuchsia-500 '></div>
        </div>
    )
}

export default TryGrid