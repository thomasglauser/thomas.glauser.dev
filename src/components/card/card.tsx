import Image from 'next/image';
import Icon from './icon';

import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import image from '/public/img/image.webp';

export default function Card() {
    return (
        <div className="m-5 xl:w-1/4 sm:w-1/2 w-full 2xl:w-1/5 flex flex-col items-center py-16 md:py-12 bg-white rounded-lg">
            <div className="w-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <Image
                        className="focus:outline-none rounded-full"
                        src={image}
                        alt="Thomas Glauser"
                        width={180}
                        height={180}
                        placeholder="blur"
                        priority={true}
                    />
                    <p className="focus:outline-none mt-8 text-xl font-semibold text-center text-slate-900">
                        Thomas Glauser
                    </p>
                </div>
            </div>
            <div className="flex items-center mt-8">
                <div className="">
                    <Icon
                        url="https://github.com/thomasglauser"
                        icon={faGithub}
                    />
                </div>
                <div className="ml-12">
                    <Icon
                        url="https://linkedin.com/in/thomas-glauser/"
                        icon={faLinkedinIn}
                    />
                </div>
                <div className="ml-12">
                    <Icon url="mailto:thomas@glauser.dev" icon={faEnvelope} />
                </div>
            </div>
        </div>
    );
}
