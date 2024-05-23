import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Search } from '@mui/icons-material';

type OnChangeFuncType = (evt: React.ChangeEvent<HTMLInputElement>) => void;

interface SearchInputProps {
  onChangeFunc?: OnChangeFuncType;
  value?: string,
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({onChangeFunc,value, onKeyDown}) => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 }}}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment" style={{display: 'none'}}>
          Search
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          placeholder='Pesquisar'
          value={value}
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          onChange={onChangeFunc}
          onKeyDown={onKeyDown}
          fullWidth
          color="secondary"
        />
      </FormControl>
    </Box>
  );
}

export default SearchInput