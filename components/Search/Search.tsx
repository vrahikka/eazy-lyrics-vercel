'use client';

import { setRecentSearch } from '@/src/localStorage';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import InputField from '../InputField/InputField';

function Search() {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get('search');
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  useEffect(() => {
    setInputValue(searchValue || '');
  }, [searchValue]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSearch = () => {
    if (inputValue && inputValue !== searchValue) {
      setRecentSearch(inputValue);
      router.push(`/search?search=${inputValue}`);
    }
  };

  const onSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <form
      className="flex justify-center gap-4 w-full flex-basis-[38rem] md:max-w-[38rem] [grid-area:search]"
      onSubmit={onSubmitSearch}
    >
      <InputField
        value={inputValue}
        onChange={onChange}
        placeholder="Search"
        id="search"
        className=""
      />
      <input
        type="button"
        onClick={onSearch}
        value="Search"
        className="p-2 rounded ring-1 ring-primary hover:cursor-pointer hover:ring-secondary"
      />
    </form>
  );
}
export default Search;
