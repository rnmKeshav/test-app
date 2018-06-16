import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
//import SelectCss from "react-select/dist/react-select.css";

const SearchBox = props => {
  let { searchText, handleUserSearch, options, handleUserSelect } = props;

  return (
    <div>
      <Select
        name="dropdown"
        placeholder="Type your github handle to search ..."
        onInputChange={handleUserSearch}
        onChange={handleUserSelect}
        value={searchText}
        options={options}
      />
    </div>
  );
};

SearchBox.propTypes = {
  searchText: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ),
  handleUserSearch: PropTypes.func,
  handleUserSelect: PropTypes.func
};

export default SearchBox;
