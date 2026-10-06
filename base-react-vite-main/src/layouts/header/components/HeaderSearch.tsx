import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { SearchBox } from './HeaderSearch.styles';

export const HeaderSearch: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState('');

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/kham-pha?search=${encodeURIComponent(searchVal.trim())}`);
    } else {
      navigate('/kham-pha');
    }
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <SearchBox>
        <Search size={14} className="search-icon" />
        <input
          type="text"
          placeholder={t('header:search')}
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </SearchBox>
    </form>
  );
};
