import { Tooltip } from '@mui/material';
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { Appearance } from '@lifi/widget';
import { ExpandableCard } from './ExpandableCard';
import { Tab, Tabs } from './Tabs';
import { useConfigActions, useConfigAppearance } from '@/app/store';
import { CardValue } from '@/app/components/ExpandableCard/ExpandableCard.styles';

const appearanceIcons = {
  light: LightModeIcon,
  dark: NightlightIcon,
  auto: BrightnessAutoIcon,
};

interface AppearanceTabProps {
  title: string;
  value: Appearance;
  Icon: React.ReactElement;
}

const AppearanceTab: React.FC<AppearanceTabProps> = ({
  title,
  value,
  Icon,
  ...props
}) => (
  <Tooltip title={title} arrow>
    <Tab icon={Icon} value={value} {...props} disableRipple />
  </Tooltip>
);

export const AppearanceControl = () => {
  const { appearance } = useConfigAppearance();
  const { setAppearance } = useConfigActions();
  const handleAppearanceChange = (
    _: React.SyntheticEvent,
    value: Appearance,
  ) => {
    setAppearance(value);
  };

  return (
    <ExpandableCard
      title={'Mode'}
      value={
        <CardValue sx={{ textTransform: 'capitalize' }}>{appearance}</CardValue>
      }
    >
      <Tabs
        value={appearance}
        aria-label="tabs"
        indicatorColor="primary"
        onChange={handleAppearanceChange}
        sx={{ mt: 1.5 }}
      >
        {Object.entries(appearanceIcons).map(([appearance, Icon]) => {
          const supportedAppearance = appearance as Appearance;

          return (
            <AppearanceTab
              key={supportedAppearance}
              title={supportedAppearance}
              value={supportedAppearance}
              Icon={<Icon />}
            />
          );
        })}
      </Tabs>
    </ExpandableCard>
  );
};
