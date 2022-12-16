import {useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import {Button, Text} from '@custom-antd';

import MinusIcon from '@assets/svit-home/modules/minus.svg';
import PlusIcon from '@assets/svit-home/modules/plus.svg';

import Colors from '@styles/Colors';

import {
  BuyWrapper,
  CountWrapper,
  ImageWrapper,
  InfoWrapper,
  ModulesGridItemWrapper,
  ModulesGridWrapper,
} from './Modules.styled';
import {ModulesGridItemProps, modules} from './utils';

const ModulesGridItem: React.FC<ModulesGridItemProps> = props => {
  const {gridItemProps} = props;
  const {title, description, itemNumber, price, image, count} = gridItemProps;

  const isCountZero = !count;

  const textColor = isCountZero ? Colors.grey1 : Colors.black;

  return (
    <ModulesGridItemWrapper>
      <ImageWrapper>
        <Image src={image} alt="Module" />
      </ImageWrapper>
      <InfoWrapper>
        <Text className="bold big title" color={Colors.black}>
          {title}
        </Text>
        <Text className="semi-bold middle item-number" color={Colors.grey1}>
          {itemNumber}
        </Text>
        <Text className="semi-bold biggest price" color={Colors.main}>
          {price}
        </Text>
        <Text className="regular middle description" color={Colors.grey1}>
          {description}
        </Text>
        <BuyWrapper>
          <CountWrapper>
            <MinusIcon />
            <Text className="regular big count" color={textColor}>
              {count}
            </Text>
            <PlusIcon />
          </CountWrapper>
          <Button type="primary" i18nKey="Buy" />
        </BuyWrapper>
      </InfoWrapper>
    </ModulesGridItemWrapper>
  );
};

const ModulesGrid: React.FC = () => {
  const {t} = useTranslation();

  const modulesGridPrefix = 'SvitHome.Modules.ModulesGrid.';

  const renderedModules = useMemo(() => {
    return modules.map(module => {
      const {key, i18nKey, itemNumber, price, image, itemsCount} = module;

      const title = t(`${modulesGridPrefix}${i18nKey}.Title`);
      const description = t(`${modulesGridPrefix}${i18nKey}.Description`);
      const itemNumberText = `${t(`${modulesGridPrefix}ItemNumber`)} ${itemNumber}`;
      const formattedPrice = `$ ${price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;
      const count = itemsCount;

      const gridItemProps = {
        title,
        description,
        itemNumber: itemNumberText,
        count,
        price: formattedPrice,
        image,
      };

      return <ModulesGridItem key={key} gridItemProps={gridItemProps} />;
    });
  }, []);

  return <ModulesGridWrapper>{renderedModules}</ModulesGridWrapper>;
};

export default ModulesGrid;
