import {useMemo} from 'react';

import {Icon} from '@atoms';
import {IconFullName, IconKind, IconName} from '@atoms/Icon/Icon';

import {IconsInARowWrapper} from './IconsInARow.styled';

type IconsInARowProps = {
  color: IconKind;
  className: string;
};

const iconsList: IconName[] = [
  'chandelier',
  'sconce',
  'floor-lamp',
  'spotlight',
  'lamp',
  'tree',
  'curtains',
  'french-curtains',
  'curtains',
  'tree',
  'lamp',
  'spotlight',
  'floor-lamp',
  'sconce',
  'chandelier',
];

const IconsInARow: React.FC<IconsInARowProps> = props => {
  const {color, className} = props;

  const renderedIcons = useMemo(() => {
    return iconsList.map((icon, index) => {
      const iconName: IconFullName = color === 'dark' ? `${icon}-dark` : `${icon}-light`;
      const key = iconName + index;

      return <Icon name={iconName} key={key} />;
    });
  }, []);

  const classNames = `footer-icons icon-${className}`;

  return (
    <IconsInARowWrapper className={classNames}>
      <div className="images-block">{renderedIcons}</div>
    </IconsInARowWrapper>
  );
};

export default IconsInARow;
