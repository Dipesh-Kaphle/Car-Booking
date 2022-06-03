import { Image } from "antd"
import suggestCar from "../../assets/suggestcar.svg"

const suggestItem = [
  {
    id: 1,
    name: "Suzuki Swift",
    price: "Rs. 25L - 30L",
    description:
      "The Suzuki Swift is a subcompact car produced by Suzuki. The vehicle is classified as a B-segment marque in the European single market, a segment referred...",
    image: <Image src={suggestCar} preview={false} />,
  },
]
export default suggestItem
