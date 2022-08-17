import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

export enum Version {
  mobile,
  tablet,
  desktop,
}

const getVersion = (): Version => {
  if (document.body.clientWidth <= 987) {
    return Version.mobile
  } else if (document.body.clientWidth >= 988 && document.body.clientWidth <= 1219) {
    return Version.tablet
  } else {
    return Version.desktop
  }
};

export const useAdaptive = (): { isMobile: boolean; isDesktop: boolean, idTablet: boolean } => {
  const [version, setVersion] = useState(getVersion());
  const handleResize = throttle(() => {
    setVersion(getVersion());
  }, 100);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isMobile: version === Version.mobile,
    isDesktop: version === Version.desktop,
    idTablet: version === Version.tablet,
  };
};