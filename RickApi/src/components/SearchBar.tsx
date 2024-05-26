import  { ChangeEventHandler } from "react";
import styles from  './Searchbar.module.css'

interface SearchBarProps {
  placeholder: string;
  value?: string;
  searchHandler?: ChangeEventHandler;
}

const SearchBar = ( props: SearchBarProps) => {
  return (
    <>
      <div>
          <input
            type="search"
            className={styles.input}
            placeholder={props.placeholder}
            id="search"
            name="search"
            value={props.value}
            onChange={props.searchHandler}
          />
      </div>
    </>
  );
};
export default SearchBar;
