import { Image } from "antd"
import pertol from "../../assets/pertol.svg"
import milega from "../../assets/milega.svg"
import fuiltype from "../../assets/fuiltype.svg"
import engin from "../../assets/engin.svg"
import Swift_pearl from "../../assets/Swift_pearl.svg"
import upsplash_AkwOrL from "../../assets/unsplashAK.svg"
import upsplash from "../../assets/unsplash.svg"

const CarDetails = [
  {
    id: 1,
    discription:
      "The Suzuki Swift is a subcompact car produced by Suzuki. The vehicle is classified as a B-segment marque in the European single market, a segment referred...The Suzuki Swift is a subcompact car produced by Suzuki. The vehicle is classified as a B-segment marque in the European single market, a segment referred single market, a segment referred...The Suzuki Swift is a subcompact car produced by Suzuki. The vehicle is classified as a B-segment marque in the European single market, a segment referred",
    name: "Suzuki Swift",
    price: "Rs. 25L - 30L",
    mainImage: <Image src={Swift_pearl} preview={false} width={500} />,
    image: [
      {
        id: 1,
        image: <Image src={upsplash_AkwOrL} preview={false} />,
      },
      {
        id: 2,
        image: <Image src={Swift_pearl} preview={false} />,
      },
      {
        id: 3,
        image: <Image src={upsplash} preview={false} />,
      },
    ],
    specification: [
      {
        id: 1,
        icon: <Image src={pertol} preview={false} />,
        name: "Dipesh Kafle",
        price: "NPR 25L - 30L",
      },
      {
        id: 2,
        icon: <Image src={engin} preview={false} />,
        name: "Dipesh Kafle",
        price: "NPR 25L - 30L",
      },
      {
        id: 3,
        icon: <Image src={milega} preview={false} />,
        name: "Dipesh Kafle",
        price: "NPR 25L - 30L",
      },
      {
        id: 4,
        icon: <Image src={fuiltype} preview={false} />,
        name: "Dipesh Kafle",
        price: "NPR 25L - 30L",
      },
    ],
    video: "",
    review: [
      {
        id: 1,
        discription:
          "Taking the price of model in view, this car is excellent since its purchase and engine, gear, mileage all things were promising. Its looking mch satisfying for the buyer and makes relief to the passengers inside",
        name: "Dipesh Kafle",
        time: " 2 Days Ago",
      },
      {
        id: 2,
        discription:
          "Taking the price of model in view, this car is excellent since its purchase and engine, gear, mileage all things were promising. Its looking mch satisfying for the buyer and makes relief to the passengers inside",
        name: "Dipesh Kafle",
        time: " 2 Days Ago",
      },
      {
        id: 3,
        discription:
          "Taking the price of model in view, this car is excellent since its purchase and engine, gear, mileage all things were promising. Its looking mch satisfying for the buyer and makes relief to the passengers inside",
        name: "Dipesh Kafle",
        time: " 2 Days Ago",
      },
      {
        id: 4,
        discription:
          "Taking the price of model in view, this car is excellent since its purchase and engine, gear, mileage all things were promising. Its looking mch satisfying for the buyer and makes relief to the passengers inside",
        name: "Dipesh Kafle",
        time: " 2 Days Ago",
      },
    ],
    color: [
      {
        id: 1,
        colorname: "red",
      },
      {
        id: 3,
        colorname: "white",
      },
      {
        id: 1,
        colorname: "blue",
      },
    ],
    faq: [
      {
        id: 1,
        name: "What is the on road price of Maruti Suzuki Swift?",
        description:
          "The on-road price of Swift in Delhi starts at ‎₹ 6.59 Lakh and goes upto ‎₹ 9.88 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
      },
      {
        id: 2,
        name: "What is the on road price of Maruti Suzuki Swift?",
        description:
          "The on-road price of Swift in Delhi starts at ‎₹ 6.59 Lakh and goes upto ‎₹ 9.88 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
      },
      {
        id: 3,
        name: "What is the on road price of Maruti Suzuki Swift?",
        description:
          "The on-road price of Swift in Delhi starts at ‎₹ 6.59 Lakh and goes upto ‎₹ 9.88 Lakh. The on road price is made up of ex-showroom price, RTO registration, road tax and insurance amount.",
      },
    ],
  },
]
export default CarDetails
