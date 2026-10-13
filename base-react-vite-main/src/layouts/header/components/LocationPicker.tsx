import { useRef, useState } from 'react';
import { Check, ChevronDown, MapPin } from 'lucide-react';
import { CITIES } from '../data/header-data';
import { useClickOutside } from '../hooks/useClickOutside';
import * as S from './LocationPicker.styles';

export function LocationPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('TP. HCM');
  const ref = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectCity = (city: string) => () => {
    setSelectedCity(city);
    setIsOpen(false);
  };

  useClickOutside([ref], [handleClose]);

  return (
    <S.LocationWrapper ref={ref}>
      <S.LocationBadge $isOpen={isOpen} onClick={handleToggleOpen}>
        <MapPin size={12} className="loc-icon" />
        <span>{selectedCity}</span>
        <ChevronDown size={10} className="chevron-icon" />
      </S.LocationBadge>

      {isOpen && (
        <S.LocationDropdown>
          {CITIES.map((city) => (
            <S.LocationItem
              key={city}
              $isSelected={selectedCity === city}
              onClick={handleSelectCity(city)}
            >
              <span>{city}</span>
              {selectedCity === city && (
                <Check size={12} className="check-icon" />
              )}
            </S.LocationItem>
          ))}
        </S.LocationDropdown>
      )}
    </S.LocationWrapper>
  );
}
