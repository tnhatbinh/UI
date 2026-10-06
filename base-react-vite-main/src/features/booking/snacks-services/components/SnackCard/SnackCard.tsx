import type { FC } from 'react';
import type { SnackProduct } from '../../data/snacks.data';
import * as S from './SnackCard.styles';

interface SnackCardProps {
  snack: SnackProduct;
  quantity: number;
  onUpdateQuantity: (delta: number) => void;
}

export const SnackCard: FC<SnackCardProps> = ({
  snack,
  quantity,
  onUpdateQuantity,
}) => {
  return (
    <S.SnackCard>
      <div className="card-top">
        <div className="img-wrap">
          <img src={snack.image} alt={snack.name} />
        </div>

        <div className="info-wrap">
          <div className="tags-line">
            <span className="tag-pill">{snack.tag}</span>
            {snack.discountBadge && (
              <span className="discount-pill">{snack.discountBadge}</span>
            )}
          </div>

          <span className="snack-name">{snack.name}</span>
          <p className="snack-desc">{snack.description}</p>

          <div className="price-line">
            <span className="price">
              {snack.price.toLocaleString('vi-VN')}đ
            </span>
            {snack.originalPrice && (
              <span className="original-price">
                {snack.originalPrice.toLocaleString('vi-VN')}đ
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="card-bottom">
        <div className="note-text">
          {snack.stockNote ||
            snack.perkNote ||
            (quantity > 0 ? '✓ Đã thêm vào giỏ' : 'Chọn số lượng')}
        </div>

        {quantity > 0 ? (
          <div className="counter-control">
            <button
              type="button"
              className="counter-btn"
              onClick={() => onUpdateQuantity(-1)}
            >
              -
            </button>
            <span className="count">{quantity}</span>
            <button
              type="button"
              className="counter-btn plus"
              onClick={() => onUpdateQuantity(1)}
            >
              +
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="add-btn"
            onClick={() => onUpdateQuantity(1)}
          >
            + Thêm
          </button>
        )}
      </div>
    </S.SnackCard>
  );
};
