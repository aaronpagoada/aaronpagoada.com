import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const [bin, setBin] = useState(true);

  return (
    <div className="text-gray-800 dark:text-white pt-32 pb-16 flex justify-between">
      <div>
        <h1 className="text-xl font-bold">Aarón Pagoada</h1>
        {bin
          ? <p onClick={() => setBin(false)}>0011110000110011</p>
          : <p onClick={() => setBin(true)}>{`<3`}</p>
        }
      </div>
      <ThemeToggle />
    </div>
  )
}

export default Header;
