type WaircButtonVariant = 'text' | 'elevated' | 'outlined' | 'filled';

type WaircSplitButtonOption = {
  label: string;
  icon?: string;
  iconClass?: string;
  disabled?: boolean;
  click: () => void;
};

export { WaircButtonVariant, WaircSplitButtonOption };
