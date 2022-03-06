import React, { useEffect } from "react";
import useAutoComplete from "../hooks/useAutoComplete";
import { AutoCompleteItem } from "./AutoCompleteItem";

const AutoCompleteInput = ({ suggestions, placeholder }) => {
  const {
    onChange,
    isShow,
    setIsShow,
    onKeyDown,
    input,
    setInput,
    filtered,
    activeIndex,
    setSuggestion,
  } = useAutoComplete();

  useEffect(() => {
    setSuggestion(suggestions);
  }, [setSuggestion, suggestions]);

  const handleClickItem = (item) => {
    setIsShow(false);
    setInput(item);
  };

  return (
    <div>
      <input
        placeholder={placeholder}
        onKeyDown={(e) => {
          onKeyDown(e);
        }}
        value={input}
        onChange={(e) => onChange(e)}
      ></input>
      {isShow && (
        <ul>
          {filtered.map((item, index) => (
            <AutoCompleteItem
              key={item}
              item={item}
              onClick={handleClickItem}
              focus={activeIndex === index}
              onKeyDown={onKeyDown}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteInput;
