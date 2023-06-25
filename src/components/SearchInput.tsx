import { useRef } from 'react';

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

import useGameQueryStore from '@/store';
import { SubmitEvt } from '@/types/events';

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s => s.setSearchText);

  const handleFormSubmit = (event: SubmitEvt) => {
    event.preventDefault();

    if (inputRef.current) {
      setSearchText(inputRef.current.value);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder='Search games...'
          variant='filled'
          value={inputRef.current?.value}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
