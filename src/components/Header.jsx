import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div className="mt-32 mb-16 pl-4 pr-4 flex justify-between">
      <div>
        <h1 className="text-xl font-bold">Aaron Pagoada</h1>
        <p>your favorite inspirational quote here</p>
      </div>
      <ThemeToggle />
    </div>
  )
}

export default Header;
