import {StyledPageSection} from './PageSection.styled';

const PageSection: React.FC<any> = props => {
  const {children} = props;

  return <StyledPageSection>{children}</StyledPageSection>;
};

export default PageSection;
