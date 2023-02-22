import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

export const Loader: React.FC = () => {
  return (
    <div className={cx('loader-container')}>
      <div className={cx('lds-ripple')}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
