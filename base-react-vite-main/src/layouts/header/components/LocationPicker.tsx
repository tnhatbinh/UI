import { useRef, useState } from 'react';
import { Check, ChevronDown, MapPin } from 'lucide-react';
import { CITIES } from '../data/header-data';
import { useClickOutside } from '../hooks/use-click-outside';
import {
  LocationBadge,
  LocationDropdown,
  LocationItem,
  LocationWrapper,
} from './LocationPicker.styles';

export function LocationPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('TP. HCM');
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside([ref], [() => setIsOpen(false)]);

  return (
    <LocationWrapper ref={ref}>
      <LocationBadge $isOpen={isOpen} onClick={() => setIsOpen((v) => !v)}>
        <MapPin size={12} className="loc-icon" />
        <span>{selectedCity}</span>
        <ChevronDown size={10} className="chevron-icon" />
      </LocationBadge>

      {isOpen && (
        <LocationDropdown>
          {CITIES.map((city) => (
            <LocationItem
              key={city}
              $isSelected={selectedCity === city}
              onClick={() => {
                setSelectedCity(city);
                setIsOpen(false);
              }}
            >
              <span>{city}</span>
              {selectedCity === city && (
                <Check size={12} className="check-icon" />
              )}
            </LocationItem>
          ))}
        </LocationDropdown>
      )}
    </LocationWrapper>
  );
}
