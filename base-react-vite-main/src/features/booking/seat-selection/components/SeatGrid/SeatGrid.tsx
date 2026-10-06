import type { FC } from 'react';
import { MoveHorizontal, Heart } from 'lucide-react';
import { useBooking } from '../../../context/use-booking';
import {
  SEAT_ROWS,
  SEAT_CLUSTERS,
  SWEETBOX_PAIRS,
  SOLD_SEATS,
  SOLD_SWEETBOX,
  getSeatType,
} from '../../data/seat-matrix.data';
import * as S from './SeatGrid.styles';

interface SeatGridProps {
  onSeatClick: (row: string, number: number) => void;
  onSweetboxClick: (id: string, number: number) => void;
}

export const SeatGrid: FC<SeatGridProps> = ({
  onSeatClick,
  onSweetboxClick,
}) => {
  const { state } = useBooking();

  return (
    <>
      <S.MobileScrollHint>
        <MoveHorizontal size={14} />
        <span>Vuốt ngang để xem toàn bộ rạp</span>
      </S.MobileScrollHint>

      <S.SeatMapGrid>
        <S.SeatMapInner>
          {/* Standard & VIP Rows (A -> H) */}
          {SEAT_ROWS.map((row) => (
            <S.SeatRow key={row}>
              <span className="row-label">{row}</span>

              {SEAT_CLUSTERS.map((cluster, clusterIdx) => (
                <div key={clusterIdx} style={{ display: 'contents' }}>
                  <div className="seats-cluster">
                    {cluster.map((num) => {
                      const id = `${row}${num}`;
                      const isSold = SOLD_SEATS.has(id);
                      const isSelected = state.selectedSeats.some(
                        (s) => s.id === id,
                      );
                      const type = getSeatType(row);

                      return (
                        <S.SeatBox
                          key={id}
                          $type={type}
                          $isSelected={isSelected}
                          $isSold={isSold}
                          disabled={isSold}
                          onClick={() => onSeatClick(row, num)}
                          title={`${id} - ${type.toUpperCase()}`}
                        >
                          {isSold ? '✕' : num}
                        </S.SeatBox>
                      );
                    })}
                  </div>

                  {clusterIdx < SEAT_CLUSTERS.length - 1 && (
                    <div className="aisle-gap" />
                  )}
                </div>
              ))}

              <span className="row-label">{row}</span>
            </S.SeatRow>
          ))}

          {/* Row J - Couple Sweetbox */}
          <S.SweetboxRow>
            <span className="row-label">J</span>
            <div className="sweetbox-cluster">
              {SWEETBOX_PAIRS.map((pair) => {
                const isSold = SOLD_SWEETBOX.has(pair.id);
                const isSelected = state.selectedSeats.some(
                  (s) => s.id === pair.id,
                );

                return (
                  <S.SweetboxCouple
                    key={pair.id}
                    $isSelected={isSelected}
                    $isSold={isSold}
                    disabled={isSold}
                    onClick={() => onSweetboxClick(pair.id, pair.num)}
                    title={`Sweetbox đôi ${pair.id}`}
                  >
                    <Heart size={10} fill={isSelected ? '#fff' : 'none'} />
                    <span>{isSold ? 'Đã bán' : pair.id.replace('J', '')}</span>
                  </S.SweetboxCouple>
                );
              })}
            </div>
            <span className="row-label">J</span>
          </S.SweetboxRow>
        </S.SeatMapInner>
      </S.SeatMapGrid>
    </>
  );
};
