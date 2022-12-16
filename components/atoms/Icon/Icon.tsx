import AntdIcon from '@ant-design/icons';

import Icons from './icons';

const {
  ChandelierIcon,
  ChandelierDarkIcon,
  SconceIcon,
  SconceDarkIcon,
  TreeIcon,
  TreeDarkIcon,
  FloorLampIcon,
  FloorLampDarkIcon,
  SpotlightIcon,
  SpotlightDarkIcon,
  LampIcon,
  LampDarkIcon,
  CurtainsIcon,
  CurtainsNoFrameIcon,
  CurtainsDarkIcon,
  CurtainsDarkNoFrameIcon,
  FrenchCurtainsIcon,
  FrenchCurtainsDarkIcon,
  FrenchCurtainsNoFrameIcon,
  FrenchCurtainsDarkNoFrameIcon,
  TulleDarkIcon,
  JalousieDarkIcon,
  BlindesDarkIcon,
} = Icons;

const iconsMap: Partial<{[key in IconFullName]: any}> = {
  'chandelier-light': ChandelierIcon,
  'chandelier-dark': ChandelierDarkIcon,

  'sconce-light': SconceIcon,
  'sconce-dark': SconceDarkIcon,

  'tree-light': TreeIcon,
  'tree-dark': TreeDarkIcon,

  'floor-lamp-light': FloorLampIcon,
  'floor-lamp-dark': FloorLampDarkIcon,

  'spotlight-light': SpotlightIcon,
  'spotlight-dark': SpotlightDarkIcon,

  'lamp-light': LampIcon,
  'lamp-dark': LampDarkIcon,

  'curtains-light': CurtainsIcon,
  'curtains-dark': CurtainsDarkIcon,

  'curtains-no-frame-light': CurtainsNoFrameIcon,
  'curtains-no-frame-dark': CurtainsDarkNoFrameIcon,

  'french-curtains-light': FrenchCurtainsIcon,
  'french-curtains-dark': FrenchCurtainsDarkIcon,

  'french-curtains-no-frame-light': FrenchCurtainsNoFrameIcon,
  'french-curtains-no-frame-dark': FrenchCurtainsDarkNoFrameIcon,

  'blindes-light': BlindesDarkIcon,
  'blindes-dark': BlindesDarkIcon,

  'tulle-dark': TulleDarkIcon,
  'tulle-light': TulleDarkIcon,

  'jalousie-dark': JalousieDarkIcon,
  'jalousie-light': JalousieDarkIcon,
};

export type IconKind = 'light' | 'dark';
export type IconName =
  | 'chandelier'
  | 'sconce'
  | 'tree'
  | 'floor-lamp'
  | 'spotlight'
  | 'lamp'
  | 'curtains'
  | 'curtains-no-frame'
  | 'french-curtains'
  | 'french-curtains-no-frame'
  | 'blindes'
  | 'tulle'
  | 'jalousie';

export type IconFullName = `${IconName}-${IconKind}`;

type IconProps = {
  name: IconFullName;
  component?: any;
  color?: string;
};

const Icon: React.FC<IconProps> = props => {
  const {component, name, ...rest} = props;

  const iconComponent = name ? iconsMap[name] : component;

  return <AntdIcon component={iconComponent} {...rest} />;
};

export default Icon;
