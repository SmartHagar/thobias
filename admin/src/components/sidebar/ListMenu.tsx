/** @format */
import MenuTypes from "@/types/MenuTypes";

import { BsBook, BsDuffle, BsHouseDoor, BsInbox, BsSend } from "react-icons/bs";

const createUrl = (path: string) => `${path}`;

const setAdminMenus = async () => {
  const ListMenu: MenuTypes[] = [
    {
      name: "Dashboard",
      href: createUrl("/dashboard"),
      icon: <BsHouseDoor />,
    },
    {
      name: "Lokasi",
      slug: "shippings",
      icon: <BsSend />,
      subMenus: [
        {
          name: "Kecamatan",
          href: createUrl("/shippings/subDistricts"),
        },
        {
          name: "Kelurahan",
          href: createUrl("/shippings/villages"),
        },
      ],
    },
    {
      name: "Kategori",
      slug: "categories",
      icon: <BsDuffle />,
      subMenus: [
        {
          name: "Daftar",
          href: createUrl("/categories/lists"),
        },
        {
          name: "Sub Kategori",
          href: createUrl("/categories/subCategories"),
        },
      ],
    },
    {
      name: "Produk",
      icon: <BsBook />,
      href: createUrl("/products/lists"),
    },
    {
      name: "Pesanan",
      href: createUrl("/orders"),
      icon: <BsInbox />,
    },
  ];

  return ListMenu;
};

export { setAdminMenus };
