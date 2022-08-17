import React, { FC } from 'react';

export const Cross: FC = () => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="white"/>
      <path d="M11 11L25 25M25 11L11 25" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
};
