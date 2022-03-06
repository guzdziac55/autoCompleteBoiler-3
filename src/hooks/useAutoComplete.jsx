import { filterList } from "../helpers/filter";
import React, { useState } from "react";

const useAutoComplete = () => {
  const [input, setInput] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [suggestions, setSuggestion] = useState([]);

  const onChange = (e) => {
    const value = e.target.value;
    let filteredArray;
    setInput(value);

    if (value.length > 0) {
      filteredArray = filterList(suggestions, value); // run filter function
      console.log("filtered");
      console.log(filteredArray);
      setFiltered(filteredArray);
      setIsShow(true);
    } else {
      setIsShow(false);
      setFiltered([]);
    }

    setActiveIndex(-1);
  };

  const onKeyDown = (e) => {
    const key = e.code;

    if (isShow) {
      switch (key) {
        case "ArrowUp":
          if (activeIndex > 0) {
            setActiveIndex((prevIndex) => prevIndex - 1);
          }
          break;
        case "ArrowDown":
          if (activeIndex < filtered.length - 1) {
            setActiveIndex((prevIndex) => prevIndex + 1);
          }
          break;
        case "Enter":
          setInput(filtered[activeIndex]);
          setIsShow(false);
          setActiveIndex(0);
          setFiltered([]);
          break;
        case "Escape":
          setIsShow(false);
          setFiltered([]);
          break;

        default:
          break;
      }
    }
  };

  return {
    onChange,
    isShow,
    setIsShow,
    onKeyDown,
    input,
    setInput,
    filtered,
    activeIndex,
    setSuggestion,
  };
};

export default useAutoComplete;
