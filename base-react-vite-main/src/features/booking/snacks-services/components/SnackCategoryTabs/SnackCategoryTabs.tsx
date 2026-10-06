import type { FC } from 'react';
import { SNACK_CATEGORIES } from '../../data/snacks.data';
import * as S from './SnackCategoryTabs.styles';

interface SnackCategoryTabsProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export const SnackCategoryTabs: FC<SnackCategoryTabsProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <S.CategoryTabsRow>
      {SNACK_CATEGORIES.map((cat) => (
        <S.CategoryTab
          key={cat.id}
          type="button"
          $isActive={activeCategory === cat.id}
          onClick={() => onSelectCategory(cat.id)}
        >
          {cat.label}
        </S.CategoryTab>
      ))}
    </S.CategoryTabsRow>
  );
};
