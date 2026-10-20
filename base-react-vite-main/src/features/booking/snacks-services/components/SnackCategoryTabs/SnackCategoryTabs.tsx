import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const handleSelectCategory = (id: string) => () => {
    onSelectCategory(id);
  };

  const getCategoryLabel = (id: string, fallback: string) => {
    switch (id) {
      case 'all':
        return t('booking:snack_cat_all');
      case 'popcorn':
        return t('booking:snack_cat_popcorn');
      case 'drink':
        return t('booking:snack_cat_drink');
      case 'exclusive':
        return t('booking:snack_cat_exclusive');
      default:
        return fallback;
    }
  };

  return (
    <S.CategoryTabsRow>
      {SNACK_CATEGORIES.map((cat) => (
        <S.CategoryTab
          key={cat.id}
          type="button"
          $isActive={activeCategory === cat.id}
          onClick={handleSelectCategory(cat.id)}
        >
          {getCategoryLabel(cat.id, cat.label)}
        </S.CategoryTab>
      ))}
    </S.CategoryTabsRow>
  );
};
