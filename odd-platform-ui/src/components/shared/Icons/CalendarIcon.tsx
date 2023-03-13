import React from 'react';
import { type SvgIconProps } from '@mui/material/SvgIcon';
import AppSvgIcon from 'components/shared/Icons/AppSvgIcon';

const CalendarIcon: React.FC<SvgIconProps> = ({ sx, ...props }) => (
  <AppSvgIcon sx={sx} viewBox='0 0 16 16' {...props}>
    <svg viewBox='0 0 24 24' fill='currentColor'>
      <path
        d='M20.625 4.3125H16.6875V2.8125C16.6875 2.70937 16.6031 2.625 16.5 2.625H15.1875C15.0844 2.625 15 2.70937 15 2.8125V4.3125H9V2.8125C9 2.70937 8.91563 2.625 8.8125 2.625H7.5C7.39687 2.625 7.3125 2.70937 7.3125 2.8125V4.3125H3.375C2.96016 4.3125 2.625 4.64766 2.625 5.0625V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V5.0625C21.375 4.64766 21.0398 4.3125 20.625 4.3125ZM19.6875 19.6875H4.3125V10.7812H19.6875V19.6875ZM4.3125 9.1875V6H7.3125V7.125C7.3125 7.22813 7.39687 7.3125 7.5 7.3125H8.8125C8.91563 7.3125 9 7.22813 9 7.125V6H15V7.125C15 7.22813 15.0844 7.3125 15.1875 7.3125H16.5C16.6031 7.3125 16.6875 7.22813 16.6875 7.125V6H19.6875V9.1875H4.3125Z'
        fill='currentColor'
      />
    </svg>
  </AppSvgIcon>
);

export default CalendarIcon;
