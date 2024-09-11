import s from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={s.SearchBox}>
      <label>
        <span>Find contacts by name</span>
        <input />
      </label>
    </div>
  );
};

export default SearchBox;
