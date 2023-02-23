import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { ImgIcon } from '../../img';

const cx = classNames.bind(styles);

export const LoaderImg: React.FC = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('img-container')}>
        <ImgIcon />
      </div>
      <div className={cx('lds-ripple')}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
