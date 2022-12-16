import {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import gsap from 'gsap/dist/gsap';
import {v4 as uuidv4} from 'uuid';

import {Text} from '@custom-antd';

import PanelBack from '@assets/panel/panel-back.png';
import PanelBolts from '@assets/panel/panel-bolts.png';
import PanelCarcass from '@assets/panel/panel-carcass.png';
import PanelFittings from '@assets/panel/panel-fittings.png';
import PanelFront from '@assets/panel/panel-front.png';
import PanelPlug from '@assets/panel/panel-plug.png';
import PanelSensors from '@assets/panel/panel-sensors.png';

import Colors from '@styles/Colors';

import {DecompositionSectionWrapper, UpperWrapper} from './DecompositionSection.styled';

const images = [
  {
    src: PanelBack,
    left: '17%',
    className: 'image-1 image',
    children: {src: PanelBolts, className: 'image-1-1', height: 27, key: uuidv4()},
    explainBlocks: [
      {
        title: 'Lorem ipsum dolor',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. EDIK rem ullam quod fugit neque perspiciatis.',
        top: 125,
        lineWidth: 360,
      },
      {
        title: 'Lorem ipsum dolor',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. EDIK rem ullam quod fugit neque perspiciatis.',
        top: 400,
        lineWidth: 360,
      },
    ],
    key: uuidv4(),
  },
  {
    src: PanelPlug,
    height: 210,
    left: '30%',
    className: 'image-3 image',
    explainBlocks: [
      {
        title: 'Lorem ipsum dolor',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. DANIA rem ullam quod fugit neque perspiciatis.',
        top: 0,
        lineWidth: 360,
      },
      {
        title: 'Lorem ipsum dolor',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. DANIA rem ullam quod fugit neque perspiciatis.',
        top: 225,
        lineWidth: 420,
      },
      {
        title: 'Lorem ipsum dolor',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. DANIA rem ullam quod fugit neque perspiciatis.',
        top: 381,
        lineWidth: 395,
      },
      {
        title: 'Lorem ipsum dolor',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. DANIA rem ullam quod fugit neque perspiciatis.',
        top: 565,
        lineWidth: 450,
      },
    ],
    key: uuidv4(),
  },
  {
    src: PanelFittings,
    left: '50%',
    className: 'image-4 image',
    explainBlocks: [
      {
        title: 'Lorem ipsum dolor',
        description: 'Lorem, ipsum dolor sit amet ',
        top: -95,
        lineWidth: 440,
      },
      {
        title: 'Lorem ipsum dolor',
        description: 'Lorem, ipsum dolor sit amet ',
        top: 250,
        lineWidth: 420,
      },
      {
        title: 'Lorem ipsum dolor',
        description: 'Lorem, ipsum dolor sit amet ',
        top: 515,
        lineWidth: 390,
      },
    ],
    key: uuidv4(),
  },
  {
    src: PanelCarcass,
    left: '80%',
    className: 'image-5 image',
    children: {src: PanelSensors, left: '80%', className: 'image-5-1', height: 10, key: uuidv4()},
    explainBlocks: [
      {
        title: 'Lorem ipsum dolor',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. KARINA rem ullam quod fugit neque perspiciatis.',
        top: 185,
        lineWidth: 430,
      },
    ],
    key: uuidv4(),
  },
  {
    src: PanelFront,
    left: '100%',
    className: 'image-6 image',
    explainBlocks: [
      {
        title: 'Lorem ipsum dolor',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. SASHA rem ullam quod fugit neque perspiciatis.',
        top: -50,
        lineWidth: 385,
      },
      {
        title: 'Lorem ipsum dolor',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. SASHA rem ullam quod fugit neque perspiciatis.',
        top: 140,
        lineWidth: 340,
      },
      {
        title: 'Lorem ipsum dolor',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. SASHA rem ullam quod fugit neque perspiciatis.',
        top: 550,
        lineWidth: 410,
      },
    ],
    key: uuidv4(),
  },
];

const distances = ['17%', '30%', '50%', '80%', '100%'];
const DecompositionSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const {t} = useTranslation('translation', {keyPrefix: 'SvitTouch.Keypads.DecompositionSection'});

  useEffect(() => {
    const imagesItems = gsap.utils.toArray<HTMLImageElement>('.image');

    if (ref && ref.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          pinSpacing: true,
          trigger: ref.current,
          start: '+=60 +=120',
          end: 'bottom+=5000 bottom',
          scrub: 0.5,
        },
      });

      // imagesItems.forEach((image, index) => {
      //   tl.fromTo(
      //     image,
      //     {
      //       left: distances[index],
      //       xPercent: -75,
      //     },
      //     {
      //       left: '0%',
      //       xPercent: -75,
      //     },
      //     0
      //   );
      // });

      imagesItems.reverse().forEach((image, index) => {
        const children = image.children[1];
        const className = `.${image.classList[1]}-line`;

        if (children) {
          tl.to(image, {
            left: '50%',
            top: -50,
            height: '110%',
          })
            .to(
              children,
              {
                bottom: -30,
              },
              '<'
            )
            .to(
              className,
              {
                opacity: 1,
              },
              '<0.35'
            )
            .to(image, {
              left: '500%',
              // xPercent: 150,
              delay: 0.3,
            })
            .to(
              className,
              {
                opacity: 0,
              },
              '<'
            );
        } else {
          tl.to(image, {
            left: '50%',
            top: -50,
            height: '110%',
          })
            .to(
              className,
              {
                opacity: 1,
              },
              '<0.35'
            )
            .to(image, {
              left: '500%',
              // xPercent: 150,
              delay: 0.3,
            })
            .to(
              className,
              {
                opacity: 0,
              },
              '<'
            );
        }
      });
    }
  }, []);

  const val = [6, 5, 4, 3, 1];

  return (
    <UpperWrapper>
      <div className="vertical-spacing">
        <div className="section">
          <Text className="regular big" color={Colors.white70}>
            {t('Description')}
          </Text>
        </div>
      </div>
      <DecompositionSectionWrapper ref={ref}>
        <div className="decompose-upper-wrapper">
          {images.map((image, index) => {
            const {src, height, left, className, children, explainBlocks, key} = image;

            return (
              <div key={key}>
                <div style={{}} className={`image-wrapper ${className}`} key={className}>
                  <Image src={src} style={{zIndex: index + 1, height}} alt={src.src} />
                  {children ? (
                    <div className={`${children.className} children-item`}>
                      <Image src={children.src} style={{zIndex: 0, height: children.height}} alt={src.src} />
                    </div>
                  ) : null}
                </div>
                {explainBlocks?.map((block, _index) => {
                  const explainKey = block.title + index + _index;

                  return (
                    <div
                      className={`image-${val[index]}-line explain-block ${block.lineWidth}`}
                      style={{position: 'absolute', zIndex: 6, top: block.top, right: 50}}
                      key={explainKey}
                    >
                      <Text color={Colors.white} className="big bold">
                        {block.title}
                      </Text>
                      <Text color={Colors.white} className="middle semi-bold">
                        {block.description}
                      </Text>
                      <div className={`line ${block.lineWidth}`} style={{width: block.lineWidth}} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </DecompositionSectionWrapper>
    </UpperWrapper>
  );
};

export default DecompositionSection;
