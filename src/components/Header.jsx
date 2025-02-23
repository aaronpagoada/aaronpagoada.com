import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div className="text-gray-800 dark:text-white pt-32 pb-16 pl-4 pr-4 flex justify-between">
      <div>
        <h1 className="text-xl font-bold">Aarón Pagoada</h1>
        <p>your favorite inspirational quote here</p>
      </div>
      <ThemeToggle />
    </div>
  )
}

export default Header;
