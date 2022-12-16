import {createContext} from 'react';

// import {useAppDispatch} from '@redux/hooks';
import {useScrollPosition} from '@hooks/useScrollPosition';

type MainContextProps = {
  // dispatch?: ReturnType<typeof useAppDispatch>;
  // navigate: ReturnType<typeof useNavigate>;
  scrollPosition: ReturnType<typeof useScrollPosition>;
  changeLanguage: (lang: string) => void;
  currentLanguage: string;
  isLaptop: boolean;
  isTablet: boolean;
  isMobile: boolean;
};

// @ts-ignore
const MainContext = createContext<MainContextProps>();

export default MainContext;
