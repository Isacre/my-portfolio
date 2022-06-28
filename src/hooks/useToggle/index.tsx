import { useState } from "react";

function useToggle(defaultValue: boolean) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value: boolean) {
    setValue((value) => !value);
  }

  return [value, toggleValue] as const;
}

export default useToggle;
