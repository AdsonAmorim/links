import Image from "next/image";
import { Wrapper } from "./styles";

export default function SocialLink({ link }) {
  return (
    <Wrapper href={link.link}>
      <Image
        src={"/assets/icons/" + link.icon + ".svg"}
        width={16}
        height={16}
        alt={link.icon}
      />
      {link.name}
    </Wrapper>
  );
}
