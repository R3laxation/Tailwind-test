import React from 'react';
import MenImage from '../../images/image-hero-desktop.png';
import MenImageMobile from '../../images/image-hero-mobile.png';
import { ReactComponent as Databiz } from '../../images/client-databiz.svg';
import { ReactComponent as Audiophile } from '../../images/client-audiophile.svg';
import { ReactComponent as Meet } from '../../images/client-meet.svg';
import { ReactComponent as Maker } from '../../images/client-maker.svg';
import {Button} from '../button';

export const MainSection = () => {
    return (
        <section className={'w-full flex-col xl:flex-row flex mt-6 xl:h-screen justify-between'}>
            <div className="relative text-center order-2 xl:order-1 xl:text-left xl:w-2/4 xl:mt-60 mt-12">
                <h1 className='text-3xl xl:text-8xl font-black xl:whitespace-pre-line mt-6'>{`Make\n remote work`}</h1>
                <p className='text-medium-gray text-lg my-12 whitespace-pre-line'>
                    {`Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n Amet ullam dolorum animi atque vitae exercitationem\n quibusdam maiores adipisci qui harum.`}
                </p>
                <Button isFilled={ true }>Learn More</Button>
                <div className="mt-20 flex justify-around xl:mt-0 xl:absolute bottom-2 xl:space-x-20">
                    <Databiz />
                    <Audiophile />
                    <Meet />
                    <Maker />
                </div>
            </div>
            <div className="hidden w-2/4 mt-20 xl:flex xl:order-2">
                <img src={ MenImage } alt="hero" />
            </div>
            <div className="flex xl:hidden w-full mt-20 justify-center mb-8 order-1">
                <img src={ MenImageMobile } alt="hero" />
            </div>
        </section>
    );
};
