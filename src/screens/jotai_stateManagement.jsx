import React from "react";
import { atom, useAtom } from "jotai";

const checkAtom = atom(0);

const doubleAtom = atom((get) => get(checkAtom) * 2);
const evenAtom = atom((get) => get(checkAtom) % 2 === 0);

const Useatom = () => {
  const [value, setValue] = useAtom(checkAtom);
  const [double] = useAtom(doubleAtom);
  const [even] = useAtom(evenAtom);

  return (
    <div>
      <button onClick={() => setValue((value) => value + 1)}>Click</button>
      <div>{value}</div>
      <div> Double -- {double} </div>
      <div> Even {even ? "true" : "false"} </div>
    </div>
  );
};

export default Useatom;
