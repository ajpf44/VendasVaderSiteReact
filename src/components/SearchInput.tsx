import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Search } from '@mui/icons-material';
import "./Header/Header.css"

type OnChangeFuncType = (evt: React.ChangeEvent<HTMLInputElement>) => void;

interface SearchInputProps {
  onChangeFunc?: OnChangeFuncType;
  value?: string,
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({onChangeFunc,value, onKeyDown}) => {
  return (
   <div className='inputSearch'>
    <Box  sx={{ '& > :not(style)': { m: 1 }}}>
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
              <Search sx={{color:'white'}} />
            </InputAdornment>
          }
          onChange={onChangeFunc}
          onKeyDown={onKeyDown}
          fullWidth
          sx={{
            '&:before': {
              borderBottom: '2px solid purple' // cor da linha antes do foco
            },
            '&:after': {
              borderBottom: '2px solid purple' // cor da linha após o foco
            }
          }}
          inputProps={{
            style: {
              color: 'white', // Cor do texto do input
              
            },
          }}
        />
      </FormControl>
    </Box>
    </div>
    
  );
}

export default SearchInput