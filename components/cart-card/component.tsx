import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { ModalBorderBig, DeleteIcon, MinusIcon, PlusIcon } from '../../img';
import * as i18n from 'i18next';

const cx = classNames.bind(styles);

export const CartCard: React.FC<{
  id: number;
  amount: number;
  products: any;
  addProduct: any;
  order: any;
}> = ({ id, amount, products, addProduct, order }) => {
  const [product] = React.useState(products.find((i) => i.id === Number(id)));
  const [newAmount, setNewAmount] = React.useState(amount);

  const increaseOrderAmount = () => {
    order[id] = newAmount + 1;
    setNewAmount(newAmount + 1);
    addProduct({ ...order });
  };

  const decreaseOrderAmount = () => {
    if (newAmount > 1) {
      order[id] = newAmount - 1;
      setNewAmount(newAmount - 1);
      addProduct({ ...order });
    }
  };

  return (
    <div className={cx('card')}>
      <div className={cx('card-border')}>
        <ModalBorderBig />
      </div>

      <div className={cx('content')}>
        <div className={cx('content-left')}>
          <img className={cx('content-left-img')} src={product.img} />
        </div>

        <div className={cx('content-center')}>
          <h3 className={cx('content-center-title')}>
            {product.name[i18n.language]}
          </h3>
          <div className={cx('content-center-counter')}>
            <button
              onClick={decreaseOrderAmount}
              className={cx('content-center-counter-btn')}
            >
              <MinusIcon />
            </button>
            <input
              className={cx('content-center-counter-input')}
              type="text"
              value={newAmount}
              disabled
            />
            <button
              onClick={increaseOrderAmount}
              className={cx('content-center-counter-btn')}
            >
              <PlusIcon />
            </button>
          </div>
        </div>

        <div className={cx('content-right')}>
          <div className={cx('content-right-price-container')}>
            <p className={cx('content-right-price-big')}>
              {product.price * newAmount}
            </p>
            <p className={cx('content-right-price-small')}>грн /</p>
            <p className={cx('content-right-price-small')}>
              {product?.weight * newAmount} г
            </p>
          </div>

          <button className={cx('content-right-btn')}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
