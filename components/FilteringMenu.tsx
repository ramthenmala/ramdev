import { SortAscendingIcon, SortDescendingIcons } from './IconsPack';

// export type Filter = {
//   filterHandler?: () => void;
//   filter?: number;
// };

const FilteringMenu = ({ onChange, filter }) => {
  return (
    <div
      className="cursor-pointer text-gray-600 hover:text-gray-900 transition-all"
      onClick={() => onChange('date', { asc: +!filter.date.asc })}
    >
      {filter.date.asc === 0 ? <SortAscendingIcon /> : <SortDescendingIcons />}
    </div>
  );
};

export default FilteringMenu;
