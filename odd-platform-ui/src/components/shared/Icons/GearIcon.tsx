import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';
import AppSvgIcon from 'components/shared/Icons/AppSvgIcon';

const GearIcon: React.FC<SvgIconProps> = ({ sx, ...props }) => (
  <AppSvgIcon sx={sx} viewBox='0 0 10 11' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.05959 0C5.53374 0 5.94271 0.332981 6.03883 0.79729L6.15826 1.37424C6.27916 1.95829 6.88118 2.30733 7.44811 2.12207L8.09535 1.91058C8.53938 1.76548 9.0247 1.94713 9.26434 2.34811L9.47326 2.69768C9.72404 3.11729 9.6347 3.65669 9.26204 3.97305L8.84749 4.32496C8.37704 4.72433 8.37704 5.4503 8.84749 5.84967L9.26204 6.20158C9.6347 6.51793 9.72404 7.05734 9.47326 7.47694L9.26434 7.82652C9.0247 8.2275 8.53938 8.40914 8.09535 8.26405L7.4481 8.05255C6.88117 7.8673 6.27916 8.21633 6.15826 8.80038L6.03883 9.37734C5.94271 9.84165 5.53374 10.1746 5.05959 10.1746H4.58146C4.10731 10.1746 3.69834 9.84165 3.60222 9.37734L3.48279 8.80038C3.36189 8.21633 2.75988 7.8673 2.19295 8.05255L1.5457 8.26405C1.10167 8.40914 0.616353 8.2275 0.376711 7.82652L0.167787 7.47694C-0.0829877 7.05734 0.00634703 6.51793 0.379009 6.20158L0.793563 5.84967C1.26401 5.4503 1.26402 4.72433 0.793564 4.32496L0.37901 3.97305C0.00634738 3.65669 -0.0829876 3.11729 0.167787 2.69768L0.376711 2.34811C0.616353 1.94713 1.10167 1.76548 1.5457 1.91058L2.19295 2.12207C2.75988 2.30733 3.36189 1.95829 3.48279 1.37424L3.60222 0.79729C3.69834 0.332981 4.10731 0 4.58146 0H5.05959ZM4.82055 6.54083C5.62331 6.54083 6.27407 5.89007 6.27407 5.08731C6.27407 4.28456 5.62331 3.63379 4.82055 3.63379C4.0178 3.63379 3.36703 4.28456 3.36703 5.08731C3.36703 5.89007 4.0178 6.54083 4.82055 6.54083Z'
      fill='#091E42'
    />
  </AppSvgIcon>
);

export default GearIcon;
