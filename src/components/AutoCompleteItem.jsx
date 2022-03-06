import { useRef, useEffect } from "react";

export const AutoCompleteItem = ({ item, focus, onClick, onKeyDown }) => {
  const ref = useRef();

  useEffect(() => {
    if (focus) {
      ref.current?.focus();
    }
  }, [focus]);

  return (
    <li
      tabIndex={focus ? 0 : -1}
      onKeyDown={(e) => onKeyDown(e)}
      onClick={() => onClick(item)}
      ref={ref}
    >
      {item}
    </li>
  );
};
