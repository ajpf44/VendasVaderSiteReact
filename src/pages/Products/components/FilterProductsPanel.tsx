import {
  Box,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import ButtonEmpty from "../../../components/Button/ButtonEmpty";

interface FilterPanelProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
  handleFilter: (term?: string) => void;
  minPrice: string;
  maxPrice: string;
  prodCategories: Set<string>;
  checkboxesStatus: any;
  setCheckboxesStatus: React.Dispatch<React.SetStateAction<{}>>;
  handleCheckboxChange: (category: string) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  setMinPrice,
  setMaxPrice,
  handleFilter,
  maxPrice,
  minPrice,
  prodCategories,
  checkboxesStatus,
  handleCheckboxChange
}) => {

  return (
    <Card
      className="filterPanelContainer"
      sx={{
        padding: "2rem",
        height: "fit-content",
        minWidth: "15rem",
        maxWidth: "15rem",
      }}
    >
      <div className="custom-input">
        <div className="priceFilterContainer">
          <h3>Preços</h3>

          <InputLabel sx={{ display: "flex", gap: "2rem" }}>
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

          <InputLabel sx={{ display: "flex", gap: "2rem" }}>
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
        </div>

        {/* FILTRO POR CATEGORIAS */}
        <Box sx={{ marginBlock: "1rem" }}>
          <FormControl sx={{}} component="fieldset" variant="standard">
            <FormLabel component="legend">Categorias</FormLabel>
            <FormGroup>
              {[...prodCategories].map((category, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        name={category}
                        checked={checkboxesStatus[category]}
                        onChange={() => handleCheckboxChange(category)}
                        color="secondary"
                      />
                    }
                    label={category}
                  />
                );
              })}
            </FormGroup>
          </FormControl>
        </Box>
        <ButtonEmpty onClick={() => handleFilter()}>Filtrar</ButtonEmpty>
      </div>
    </Card>
  );
};

export default FilterPanel;
