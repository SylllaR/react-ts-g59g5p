import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { ModalBorder, ModalBorderBig, CloseIcon } from '../../img';
import { BrushButton } from '../../components';
import * as i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import * as Highcharts from 'highcharts';
import PieChart from 'highcharts-react-official';

import getOptions from '../../helpers/getOptions';

const cx = classNames.bind(styles);

interface ModalCardProps {
  closeModal: () => void;
  data: Data;
  addProduct: () => void;
  order: {};
}

interface Data {
  name: string;
  img: string;
  price: number;
  weight: number;
  consist: string;
  nutrients: Nutrients;
  properties?: string[];
}

interface Nutrients {
  protein: number;
  fat: number;
  ch: number;
}

export const ModalCard: React.FC<ModalCardProps> = ({
  closeModal,
  data,
  addProduct,
  order,
}) => {
  const { t } = useTranslation();
  const [orderAmount, setOrderAmount] = React.useState(order[data.id] || 1);

  const addProductToCart = (id: number) => {
    addProduct((order[id] = orderAmount));
    closeModal();
  };

  const increaseOrder = () => {
    setOrderAmount(orderAmount + 1);
  };
  const decreaseOrder = () => {
    if (orderAmount > 1) {
      setOrderAmount(orderAmount - 1);
    }
  };

  return (
    <React.Fragment>
      <div className={cx('bkg')} />
      <div className={cx('wraper')}>
        <div className={cx('modal')}>
          <div className={cx('modal-close')}>
            <ModalBorder />
            <button className={cx('modal-close-btn')} onClick={closeModal}>
              <CloseIcon />
            </button>
          </div>
          <div className={cx('modal-img-container-border-big')}>
            <ModalBorderBig />
          </div>
          <div className={cx('modal-img-container')} tabIndex={10}>
            <div className={cx('modal-img-container-border')}>
              <ModalBorder />
            </div>
            <img className={cx('modal-img')} src={data.img} />
          </div>
          <div className={cx('modal-content')}>
            <h2 className={cx('modal-content-title')}>
              {data.name[i18n.language]}
            </h2>
            <p className={cx('modal-content-consist')}>
              <span className={cx('red')}>{t('modal.contain')}</span>
              {data.consist[i18n.language]}
            </p>

            <div className={cx('modal-charts')}>
              <div className={cx('modal-chart')}>
                <PieChart
                  highcharts={Highcharts}
                  options={getOptions('protein', data.nutrients)}
                />
                <span>
                  {t('modal.protein')}
                  {data.nutrients.protein} г
                </span>
              </div>
              <div className={cx('modal-chart')}>
                <PieChart
                  highcharts={Highcharts}
                  options={getOptions('fat', data.nutrients)}
                />
                <span>
                  {t('modal.fat')}
                  {data.nutrients.fat} г
                </span>
              </div>
              <div className={cx('modal-chart')}>
                <PieChart
                  highcharts={Highcharts}
                  options={getOptions('carbhyd', data.nutrients)}
                />
                <span>
                  {t('modal.ch')}
                  {data.nutrients.ch} г
                </span>
              </div>
            </div>

            <div className={cx('order-part')}>
              <div className={cx('order-counter')}>
                <button className={cx('order-btn')} onClick={decreaseOrder}>
                  -
                </button>
                <input
                  className={cx('order-input')}
                  value={orderAmount}
                  min={1}
                  disabled
                />
                <button className={cx('order-btn')} onClick={increaseOrder}>
                  +
                </button>
              </div>

              <div className={cx('modal-btn')}>
                <BrushButton
                  title={`${data.price * orderAmount} грн / ${
                    data.weight * orderAmount
                  } г`}
                  onClick={() => addProductToCart(data.id)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
