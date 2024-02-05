import Bottom from "./bottom";
import Right from "./right";
import Image from "next/image";
interface Props {
  imageUrl: string
  title: string
  desc: string
}
export default function SwiperItem({ imageUrl, title, desc }: Props) {
  return (
    <div className="w-full h-full">
      <div
        id="thumnail"
        className="absolute bg-black transition-all duration-200 hidden top-0 right-0 bottom-0 left-0 w-full h-full"
      >
        <Image
          fill
          alt="thumnail"
          className="object-cover w-full h-full absolute top-0 left-0 right-0 bottom-0"
          src={imageUrl}
        ></Image>
      </div>
      <Right />
      <Bottom title={title} desc={desc} />
    </div>
  );
}
