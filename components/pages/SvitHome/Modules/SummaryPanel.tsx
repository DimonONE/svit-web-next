import {useTranslation} from 'react-i18next';

import {Text} from '@custom-antd';

import TickIcon from '@assets/icons/tick.svg';

import Colors from '@styles/Colors';

import {PanelWrapper, SummaryPanelWrapper} from './Modules.styled';

const SummaryPanel: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Modules.SummaryPanel'});

  const itemsAmount = 0;

  return (
    <SummaryPanelWrapper>
      <PanelWrapper>
        <div className="tick-icon">
          <TickIcon />
        </div>
        <Text className="regular big" color={Colors.white}>
          {itemsAmount}&nbsp;{t('ItemsAmount')}
        </Text>
      </PanelWrapper>
    </SummaryPanelWrapper>
  );
};

export default SummaryPanel;
