import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons"
const FooterItem = [
  {
    id: 1,
    item: [],
    discription: "© Paramdu Motors, 2022. All Rights Reserved",
  },
  {
    id: 2,
    discription: "",
    item: [
      {
        id: 0,
        name: "",
        nameitem: "Follow us",
      },
      {
        name: <FacebookOutlined />,
        id: 1,
        nameitem: "",
        link:'https://facebook.com/paramdumotors',
      },
      {
        name: <InstagramOutlined />,
        id: 2,
        nameitem: "",
        link:'',

      },
      {
        name: <LinkedinOutlined />,
        id: 3,
        nameitem: "",
        link:'',

      },
      {
        name: <YoutubeOutlined />,
        id: 4,
        nameitem: "",
        link:'',

      },
    ],
  },
  {
    id: 3,
    discription: "",
    item: [
      {
        id: 5,
        name: "Terms & Conditions",
        link: "/terms",
      },

      {
        id: 6,
        name: "FAQs",
        link: "",
      },
    ],
    menu_name: "Contact Us",
  },
]

export default FooterItem
