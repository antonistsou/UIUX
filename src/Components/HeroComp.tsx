import videobg from '../assets/5409421_Coll_wavebreak_Globe_1280x720.mp4'
import { InView } from 'react-intersection-observer'

interface ScreenProps {
    onViewChange: (inView: boolean) => void;
}

const HeroComp = ({ onViewChange }: ScreenProps) => {

    return (
        <InView as="div" onChange={(inView, _entry) => onViewChange(inView)}>
            <div className='h-screen'>
                <video id='video' src={videobg} autoPlay loop muted className='opacity-10'></video>
                <div className='absolute w-full overflow-x-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                    <p className='text-6xl text-pretty whitespace-nowrap'>
                        Making projects <span className='text-cyan-700'> Land </span>
                        smooth and easy
                    </p>
                    <p className='pt-4 text-lg text-gray-400 '>
                        Software from the future
                    </p>
                </div>
            </div>
        </InView>
    );
}

export default HeroComp