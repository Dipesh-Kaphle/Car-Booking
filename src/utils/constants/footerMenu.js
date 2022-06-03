import { Image } from "antd"
import logo from "../../assets/logo.svg"

const FooterMenu = [
  {
    id: 1,
    menu_name: "Paramdu Motors",
    image: <Image src={logo} previous={false} width={91} />,
    item: [],
    discription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
  },
  {
    id: 2,
    menu_name: "Navigate",
    image: "",
    discription: "",
    item: [
      // {
      //   name: 'What we do',
      //   id: 1
      // },
      // {
      //   name: 'How it works',
      //   id: 2
      // },
      {
        name: "About us",
        id: 3,
        link: "/app/aboutus",
      },
      {
        name: "Send us Feedbacks",
        id: 4,
        link: "/short/send/feedback",
      },
    ],
  },
  {
    id: 3,
    image: "",
    discription: "Naxal, Kathmandu +977-01-444201 paramdumotors@gmail.com",
    item: [],
    menu_name: "Contact Us",
  },

]

export default FooterMenu
