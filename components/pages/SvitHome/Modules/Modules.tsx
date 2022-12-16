import {ModulesWrapper} from './Modules.styled';
import ModulesGrid from './ModulesGrid';
import SummaryPanel from './SummaryPanel';

const Modules: React.FC = () => {
  return (
    <ModulesWrapper>
      <div className="section">
        <SummaryPanel />
        <ModulesGrid />
      </div>
    </ModulesWrapper>
  );
};

export default Modules;
