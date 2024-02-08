import { AirlineStops, SwapHoriz } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import { CardButton } from '../../components/Card';
import { useSettingMonitor } from '../../hooks';
import { useSettingsStore } from '../../stores';
import { navigationRoutes } from '../../utils';
import { BadgedValue } from './SettingsCard';

const supportedIcons = {
  Bridges: AirlineStops,
  Exchanges: SwapHoriz,
};

export const BridgeAndExchangeSettings: React.FC<{
  type: 'Bridges' | 'Exchanges';
}> = ({ type }) => {
  const { isBridgesChanged, isExchangesChanged } = useSettingMonitor();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [enabledTools, tools] = useSettingsStore((state) => {
    const enabledTools = Object.values(state[`enabled${type}`]);
    return [enabledTools.filter(Boolean).length, enabledTools.length];
  }, shallow);

  const customisationLookUp = {
    Bridges: isBridgesChanged,
    Exchanges: isExchangesChanged,
  };

  const handleClick = () => {
    navigate(navigationRoutes[type.toLowerCase() as 'bridges' | 'exchanges']);
  };

  const Icon = supportedIcons[type];

  return (
    <CardButton
      onClick={handleClick}
      icon={<Icon />}
      title={t(`settings.enabled${type}`)}
    >
      <BadgedValue
        badgeColor="info"
        showBadge={customisationLookUp[type]}
      >{`${enabledTools}/${tools}`}</BadgedValue>
    </CardButton>
  );
};
