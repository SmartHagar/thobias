/** @format */
import MenuTypes from "@/types/MenuTypes";

import { BsBook, BsHouseDoor, BsSend } from "react-icons/bs";

const createUrl = (path: string) => `${path}`;

const setAdminMenus = async () => {
  const ListMenu: MenuTypes[] = [
    {
      name: "Home",
      href: createUrl("/"),
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
      icon: <BsHouseDoor />,
      subMenus: [
        {
          name: "Jenis",
          href: createUrl("/categories/all"),
        },
        {
          name: "Daftar",
          href: createUrl("/categories/sub"),
        },
      ],
    },
    {
      name: "Pesanan",
      href: createUrl("/orders"),
      icon: <BsBook />,
    },
  ];

  return ListMenu;
};

export { setAdminMenus };
