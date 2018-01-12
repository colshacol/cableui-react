import React from "react";
import { observer } from "mobx-react";
import "./styles/FilterInput.css";
import FiltersStore from "stores/Filters.store";

// ?: Can I make this stateless?
@observer
export default class FilterInput extends React.Component {
  render() {
    return (
      <input
        class="_filter-input"
        onChange={FiltersStore.filterLocations}
        value={FiltersStore.filterQuery}
        placeholder="search locations"
      />
    );
  }
}
