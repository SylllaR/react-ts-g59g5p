import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { Card, ModalCard } from '../../components';
import { ArrowLeft, ArrowRight } from '../../img';
import * as i18n from 'i18next';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

interface Props {
  groups: any;
  productList: any;
}

export const MenuPage: React.FC<Props> = ({ groups, productList }) => {
  const { t } = useTranslation();

  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [modalData, setModalData] = React.useState(null);
  const [groupIndex, setGroupIndex] = React.useState(0);
  const [style, setStyle] = React.useState(`translateX(${groupIndex * -100}%)`);
  const [categoriesLastIndex] = React.useState(
    Object.entries(groups).length - 1
  );

  const openModal = (id: number) => {
    const item = productList.find((item) => item.id === id);
    setModalData(item);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const changeIndex = (index: number) => {
    setGroupIndex(index);
  };

  React.useEffect(() => {
    setStyle(`translateX(${groupIndex * -100}%)`);
  }, [groupIndex]);

  const scollToRef = React.useRef();

  const changeGroup = (side: string) => {
    setGroupIndex(side === 'left' ? groupIndex - 1 : groupIndex + 1);
    document.getElementById('cards-group').scrollIntoView();
  };

  return (
    <div className={cx('page')}>
      <div className={cx('tabs-container')}>
        <ul className={cx('tabs')}>
          {groups.map((group, index) => {
            if (
              productList.some((newProduct) => newProduct.group === group.id)
            ) {
              return (
                <li
                  key={group.id}
                  className={cx('tabs-item', { active: index === groupIndex })}
                  onClick={() => {
                    changeIndex(index);
                  }}
                >
                  {group[i18n.language]}
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className={cx('wrapper')}>
        <button
          className={cx('side-btn')}
          onClick={() => {
            changeGroup('left');
          }}
          disabled={groupIndex === 0}
        >
          <ArrowLeft />
        </button>

        <div className={cx('cards')}>
          {groups.map((cat) => (
            <div
              id="cards-group"
              key={cat.id}
              ref={scollToRef}
              className={cx('cards-group')}
              style={{ transform: style }}
            >
              {productList.map((item) => {
                if (item.group === cat.id) {
                  return (
                    <Card
                      key={item.name + item.id}
                      id={item.id}
                      name={item.name[i18n.language]}
                      img={item.img}
                      price={item.price}
                      weight={item.weight}
                      //properties={item.properties}
                      onClick={() => {
                        openModal(item.id);
                      }}
                    />
                  );
                }
              })}
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            changeGroup('right');
          }}
          className={cx('side-btn', 'side-btn-right')}
          disabled={groupIndex === categoriesLastIndex}
        >
          <ArrowRight />
        </button>
      </div>

      {isOpenModal && <ModalCard closeModal={closeModal} data={modalData} />}
    </div>
  );
};
