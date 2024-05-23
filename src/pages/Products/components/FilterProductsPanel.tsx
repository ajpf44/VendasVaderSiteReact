import { Input, InputAdornment, InputLabel } from "@mui/material";
import ButtonEmpty from "../../../components/Button/ButtonEmpty";

interface FilterPanelProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
  handleFilter: (term: string) => void;
  minPrice: string;
  maxPrice: string;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  setMinPrice,
  setMaxPrice,
  handleFilter,
  maxPrice,
  minPrice,
}) => {
  return (
    <div className="filterPanelContainer">
      <div className="custom-input">
        <div className="priceFilterContainer">
          <h3>Preços</h3>

          <InputLabel sx={{display: 'flex', gap: '2rem'}}>
            <span>Min:</span>
            <Input
              id="outlined-textarea"
              placeholder="Mínimo"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              fullWidth
              color="secondary"
              startAdornment={
                <InputAdornment position="start">R$</InputAdornment>
              }
            />
          </InputLabel>

          <InputLabel sx={{display: 'flex', gap: '2rem'}}>
            <span>Max:</span>
            <Input
              id="outlined-textarea"
              placeholder="Máximo"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              fullWidth
              color="secondary"
              startAdornment={
                <InputAdornment position="start">R$</InputAdornment>
              }
            />
          </InputLabel>

          <ButtonEmpty onClick={() => handleFilter("")}>Filtrar</ButtonEmpty>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
