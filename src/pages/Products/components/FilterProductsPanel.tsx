import SearchInput from "../../../components/SearchInput";

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
    searchTerm,
    setSearchTerm,
    setMinPrice,
    setMaxPrice,
    handleFilter,
    maxPrice,
    minPrice,
  }) => {
    return (
      <div className="filterPanelContainer">
        <div className="custom-input">
          <SearchInput
            value={searchTerm}
            onChangeFunc={(evt) => {
              setSearchTerm(evt.target.value);
              handleFilter(evt.target.value);
            }}
            onKeyDown={()=>{}}
          />
  
          <div className="priceFilterContainer">
            <h3>Preços</h3>
  
            <label htmlFor="">
              <span>Min</span>
              <input type="number" name="" id="" value={minPrice} onChange={(e)=>setMinPrice(e.target.value)}/>
            </label>
  
            <label htmlFor="">
              <span>Max</span>
              <input  type="number" name="" id="" value={maxPrice} onChange={(e)=>setMaxPrice(String(e.target.value))}/>
            </label>  
  
            <button
              onClick={()=>handleFilter("")}
            >Filtrar</button>
          </div>
        </div>
      </div>
    );
  };

  export default FilterPanel;