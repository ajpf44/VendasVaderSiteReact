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
import { useEffect } from "react";

interface FilterPanelProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
  handleFilter: (term: string) => void;
  minPrice: string;
  maxPrice: string;
  prodCategories: Set<string>;
  checkboxesStatus: any;
  setCheckboxesStatus: React.Dispatch<React.SetStateAction<{}>>;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  setMinPrice,
  setMaxPrice,
  handleFilter,
  maxPrice,
  minPrice,
  prodCategories,
  checkboxesStatus,
  setCheckboxesStatus,
}) => {

  useEffect(() => {
    setCheckboxesStatus( prevStatus => {
      const newStatus: any = {}
      prodCategories.forEach(category => {
        newStatus[category] = true
      })
      return newStatus  
    })
  },[])

  return (
    <Card
      className="filterPanelContainer"
      sx={{
        padding: "2rem",
        height: "fit-content",
        minWidth: "10rem",
        maxWidth: "10rem",
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
                        checked={checkboxesStatus[category]?? true}
                        onChange={(e) => {
                          setCheckboxesStatus({
                           ...checkboxesStatus,
                            [category]: !checkboxesStatus[category],
                          });
                        }}
                        name={category}
                      />
                    }
                    label={category}
                  />
                );
              })}
            </FormGroup>
          </FormControl>
        </Box>
        <ButtonEmpty onClick={() => handleFilter("")}>Filtrar</ButtonEmpty>
      </div>
    </Card>
  );
};

export default FilterPanel;
