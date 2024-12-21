import React, { useRef } from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs';

interface Props {
    onSearch : ( searchText : string) => void ; 
}

const SearchInput = ({onSearch} : Props) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        /* @ts-ignore */
        // prevent Default to prevent the form from being posted to the server
        <form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) onSearch(ref.current.value);
            
        }}>
            {/* @ts-ignore */}
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled' />
            </InputGroup>
        </form>
    );
};


export default SearchInput; 