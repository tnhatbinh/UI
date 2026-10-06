import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../data/header-data';
import { useClickOutside } from '../hooks/use-click-outside';
import {
  LangBadge,
  LangDropdown,
  LangItem,
  LangWrapper,
} from './LangSwitcher.styles';

export function LangSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside([ref], [() => setIsOpen(false)]);

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  return (
    <LangWrapper ref={ref}>
      <LangBadge $isOpen={isOpen} onClick={() => setIsOpen((v) => !v)}>
        <img
          src={currentLang.flagUrl}
          alt={currentLang.label}
          className="flag-img"
        />
        <ChevronDown size={10} className="chevron-icon" />
      </LangBadge>

      {isOpen && (
        <LangDropdown>
          {LANGUAGES.map((lang) => (
            <LangItem
              key={lang.code}
              $isSelected={i18n.language === lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsOpen(false);
              }}
            >
              <span className="lang-label">{lang.label}</span>
              <img src={lang.flagUrl} alt={lang.label} className="flag-img" />
            </LangItem>
          ))}
        </LangDropdown>
      )}
    </LangWrapper>
  );
}
