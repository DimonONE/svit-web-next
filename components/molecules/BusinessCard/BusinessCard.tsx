import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap/dist/gsap';
import Colors from '@styles/Colors';
import { Text, Title } from '@custom-antd';
import LukeHollandIMG from '@assets/blog/LukeHolland.png';
import QuotesIMG from '@assets/blog/quotes.png';
import { device, maxDevice } from '@styles/MediaQueries';
import { CardSection, CardWrapper, NameAndIcon, TextWrapper } from './BusinessCard.styled';

const BusinessCard: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref && ref.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          end: 'top center-=30 %',
          scrub: 0.5,
        },
      });

      let mm = gsap.matchMedia();

      mm.add(
        {
          isLaptop: device.laptop,
          isMobile: maxDevice.tablet,
        },
        context => {
          // @ts-ignore
          const {isLaptop, isMobile} = context.conditions;

          const tweenVal = isLaptop ? 35 : isMobile ? -40 : -15;

          tl.fromTo('.textTitle, .subTitle', {x: -1000}, {x: tweenVal});
        }
      );
    }
  }, []);

  return (
    <CardWrapper ref={ref}>
      <TextWrapper>
        <Title className="textTitle text" fontWeight={600} color={Colors.black}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </Title>
        <Title className="subTitle text" color={Colors.black}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </Title>
      </TextWrapper>
      
      <CardSection>
        <div className='image-quotes'>
          <Image src={QuotesIMG} alt="QuotesIMG" />
        </div>
        <NameAndIcon>
          <div className='image-container'>
            <Image src={LukeHollandIMG} alt="Luke Holland" />
          </div>
          <Text className='name'>Luke Holland</Text>
        </NameAndIcon>
      </CardSection>
    </CardWrapper>
  );
};

export default BusinessCard;