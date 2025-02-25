import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div className="text-gray-800 dark:text-white pt-32 pb-16 flex justify-between">
      <div>
        <h1 className="text-xl font-bold">Aarón Pagoada</h1>
        <p>pushing pixels, slingin' divs</p>
      </div>
      <ThemeToggle />
    </div>
  )
}

export default Header;
