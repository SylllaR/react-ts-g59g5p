import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { VegeterianIcon, PorkIcon, BeefIcon } from '../../img';
import { LoaderImg } from '../../components';

const cx = classNames.bind(styles);

interface CardProps {
  id: number;
  img: string;
  name: string;
  price: number;
  weight: number;
  properties?: string[];
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({
  id,
  img,
  name,
  price,
  weight,
  properties,
  onClick,
}) => {
  const [isLoadImg, setIsLoadImg] = React.useState(false);

  const setIcons = (prop: string) => {
    switch (prop) {
      case 'vegeterian':
        return <VegeterianIcon />;
      case 'beef':
        return <BeefIcon />;
      case 'pork':
        return <PorkIcon />;
    }
  };

  return (
    <div className={cx('card')} onClick={onClick}>
      <div className={cx('card-img-container')}>
        <img
          className={cx('card-img', { opacity: !isLoadImg })}
          onLoad={() => {
            setIsLoadImg(true);
          }}
          src={img}
          alt={`${name} pic`}
        />
        {!isLoadImg && <LoadImg />}
      </div>
      <span className={cx('card-title')}>{name}</span>
      <div className={cx('card-icons')}>
        {properties &&
          properties.map((item) => (
            <div className={cx('card-icon')} title={item}>
              {setIcons(item)}
            </div>
          ))}
      </div>
      <div className={cx('card-price')}>
        <span>{price} грн</span>
        <span>{weight} г</span>
      </div>
    </div>
  );
};
