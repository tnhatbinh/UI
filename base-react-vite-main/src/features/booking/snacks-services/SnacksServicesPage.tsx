import type { FC } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { useBooking } from '../context/use-booking';
import { useBookingTimer } from '../hooks/use-booking-timer';
import { MOCK_SNACKS } from './data/snacks.data';
import { SnackOfferBanner } from './components/SnackOfferBanner/SnackOfferBanner';
import { SnackCategoryTabs } from './components/SnackCategoryTabs/SnackCategoryTabs';
import { SnackCard } from './components/SnackCard/SnackCard';
import { PickupMethodSelector } from './components/PickupMethodSelector/PickupMethodSelector';
import { SnackOrderSummary } from './components/SnackOrderSummary/SnackOrderSummary';
import * as S from './SnacksServicesPage.styles';

export const SnacksServicesPage: FC = () => {
  const navigate = useNavigate();
  const { state, updateSnackQuantity } = useBooking();

  const [activeCategory, setActiveCategory] = useState('all');
  const { formattedTime } = useBookingTimer(524); // 08:44

  const filteredSnacks =
    activeCategory === 'all'
      ? MOCK_SNACKS
      : MOCK_SNACKS.filter((s) => s.category === activeCategory);

  const getSnackQuantity = (id: string) => {
    return state.selectedSnacks.find((s) => s.id === id)?.quantity || 0;
  };

  const handleContinue = () => {
    navigate('/booking/checkout');
  };

  return (
    <S.PageContainer>
      <S.InnerWrapper>
        {/* Top Stepper & Countdown Bar */}
        <S.TopBar>
          <S.StepperRow>
            <div
              className="step-item completed"
              onClick={() => navigate('/movie-details')}
            >
              <div className="step-num">✓</div>
              <span>1. Suất chiếu</span>
            </div>
            <span className="step-arrow">&gt;</span>

            <div
              className="step-item completed"
              onClick={() => navigate('/booking/seat-selection')}
            >
              <div className="step-num">✓</div>
              <span>2. Chọn ghế</span>
            </div>
            <span className="step-arrow">&gt;</span>

            <div className="step-item active">
              <div className="step-num">3</div>
              <span>3. Bắp nước & Combo</span>
            </div>
            <span className="step-arrow">&gt;</span>

            <div className="step-item">
              <div className="step-num">4</div>
              <span>4. Thanh toán</span>
            </div>
          </S.StepperRow>

          <S.TimerBadge>
            <Clock size={14} />
            <span>THỜI GIAN GIỮ VÉ: {formattedTime}</span>
          </S.TimerBadge>
        </S.TopBar>

        {/* Main Content Layout (Left: Catalog, Right: Order Summary) */}
        <S.MainGrid>
          {/* Left Column: Concessions & Pickup Settings */}
          <S.LeftContent>
            {/* Online Promotion Banner */}
            <SnackOfferBanner />

            {/* Category Tabs */}
            <SnackCategoryTabs
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />

            {/* Snack Cards Grid */}
            <S.SnackCardsGrid>
              {filteredSnacks.map((snack) => {
                const qty = getSnackQuantity(snack.id);
                return (
                  <SnackCard
                    key={snack.id}
                    snack={snack}
                    quantity={qty}
                    onUpdateQuantity={(delta) =>
                      updateSnackQuantity(
                        {
                          id: snack.id,
                          name: snack.name,
                          price: snack.price,
                          quantity: qty,
                          image: snack.image,
                        },
                        delta,
                      )
                    }
                  />
                );
              })}
            </S.SnackCardsGrid>

            {/* Pickup Method Selection */}
            <PickupMethodSelector />
          </S.LeftContent>

          {/* Right Column: Order Summary Sidebar */}
          <SnackOrderSummary
            onContinue={handleContinue}
            onSkip={handleContinue}
          />
        </S.MainGrid>
      </S.InnerWrapper>
    </S.PageContainer>
  );
};

export default SnacksServicesPage;
