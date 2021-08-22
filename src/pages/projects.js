import NavBar from "../components/NavBar"
import ThemeChanger from "../components/ThemeChanger"

export default function Projects () {
  const items = ["Happy Farm", "Portfolio", "WilsWork", "Trading app", "Apis"];
  console.log(items)
  return(
    <>
      <NavBar navItems={items}/>
      <ThemeChanger />
    </>
  )
}

