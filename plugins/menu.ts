import { useMenusStore, MenuCollection } from "../includes/menu"

export function MenuPlugin() {
  const menus = useMenusStore()
  const menu: MenuCollection[] = []

  menu.push({
    menu_name: "home-menu",
    items: [
      {
        name: "home",
        label: "Home",
        to: "#home",
      },
      {
        name: "projects",
        label: "Projects",
        to: "#projects",
      },
      {
        name: "about",
        label: "About",
        to: "#about",
      },
      {
        name: "contact",
        label: "Contact",
        to: "#contact",
      },
      {
        name: "github",
        label: "GitHub",
        to: "https://github.com/MakanaMakesStuff",
        icon: "fa-brands fa-github",
        class: "no-label",
        target: "_blank",
      },
      {
        name: "linkedin",
        label: "Linkedin",
        to: "https://www.linkedin.com/in/makanaokeakua/",
        icon: "fa-brands fa-linkedin",
        class: "no-label",
        target: "_blank",
      },
    ],
  })

  menus.add(menu)
}
