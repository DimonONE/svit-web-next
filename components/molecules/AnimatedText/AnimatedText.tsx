import {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';

import gsap from 'gsap/dist/gsap';

import {Title} from '@custom-antd';

import Colors from '@styles/Colors';

const animation = {
  value: 0,
};

type AnimatedTextProps = {
  to: number;
  toFixedValue?: number;
  suffix?: string;
  prefix?: string;
  color?: string;
  isSuffixTranslated?: boolean;
  level?: 1 | 3 | 2 | 4 | 5;
};

const AnimatedText: React.FC<AnimatedTextProps> = props => {
  const {to, toFixedValue = 0, suffix, prefix, color = Colors.black, isSuffixTranslated = false, level = 1} = props;

  const {t} = useTranslation('translation', {keyPrefix: 'Suffixes'});

  const ref = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState(0);

  const suffixText = isSuffixTranslated && suffix ? t(suffix) : suffix;

  useEffect(() => {
    if (ref && ref.current) {
      const title = ref.current.querySelector(`h${level}`);

      if (title) {
        gsap.to(animation, {
          scrollTrigger: {
            trigger: ref.current,
            start: 'bottom bottom',
          },
          duration: 3,
          value: to,
          ease: 'Linear.easeNone',
          onUpdate: () => {
            setValue(Number(animation.value.toFixed(toFixedValue)));
          },
        });
      }
    }
  }, []);

  return (
    <div ref={ref}>
      <Title color={color} fontWeight={800} level={level}>
        {prefix}
        {value}
        {suffixText}
      </Title>
    </div>
  );
};

export default AnimatedText;
