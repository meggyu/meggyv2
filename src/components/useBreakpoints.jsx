import throttle from 'lodash/throttle';
import { useState, useEffect } from 'react';

function useScreenWidth(cb) {
    useEffect(() => {
      const calcInnerWidth = throttle(() => {
        cb(window.innerWidth);
      }, 200);
      window.addEventListener('resize', calcInnerWidth);
      calcInnerWidth();

      return () => {
        window.removeEventListener('resize', calcInnerWidth);
        calcInnerWidth.cancel();
      };
    }, []);
  }

export function useWidthGreaterThan(width, inclusive = true) {
    const [isGreaterThan, setIsGreaterThan] = useState(false);
    useScreenWidth((screenWidth) => {
      setIsGreaterThan(inclusive ? screenWidth >= width : screenWidth > width);
    });

    return isGreaterThan;
}
