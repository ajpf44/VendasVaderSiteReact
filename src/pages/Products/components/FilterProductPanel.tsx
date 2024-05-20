import SearchInput from "../../../components/SearchInput";

const FilterPanel = () => {
  return (
    <div className="filterPanelContainer">
      <div className="custom-input">
        <SearchInput />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
