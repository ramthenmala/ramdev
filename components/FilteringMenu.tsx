export type Filter = {
  filterHandler?: () => void;
  filter?: number;
};

const FilteringMenu = ({ onChange, filter }) => {
  return (
    <div onClick={() => onChange({ view: { list: +!filter.view.list } })}>
      FilteringMenu
    </div>
  );
};

export default FilteringMenu;
