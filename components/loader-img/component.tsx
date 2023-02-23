import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

export const LoaderImg: React.FC = () => {
  return (
    <div className={cx('lds-ripple')}>
      <div></div>
      <div></div>
    </div>
  );
};
