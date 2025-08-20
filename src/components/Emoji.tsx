import bullsEye from "@/assets/bulls-eye.webp";
import thumbsUp from "@/assets/thumbs-up.webp";
import meh from "@/assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "Recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "Exceptional", boxSize: "35px" },
  };
  return (
    <Image
      src={emojiMap[rating]?.src}
      alt={emojiMap[rating]?.alt}
      boxSize={emojiMap[rating]?.boxSize}
      marginTop={1}
    />
  );
};

export default Emoji;
