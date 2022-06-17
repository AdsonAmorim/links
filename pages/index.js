import Head from "next/head";
import styled from "styled-components";
import SocialLink from "../components/SocialLink";

const HomePage = styled.div`
  background-color: #121214;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .userName {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }

  .userNick {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #b7b7b7;
    margin-top: -16px;
  }

  p.footer {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    position: absolute;
    bottom: 2rem;
  }
`;

const ProfileImg = styled.img`
  border: 2px solid #04d361 !important;
  filter: drop-shadow(0px 4px 4px rgba(4, 211, 97, 0.25));
  border-radius: 120px;
`;

export default function Home() {
  const SocialLinks = [
    {
      name: "Github",
      icon: "github",
      link: "https://github.com/AdsonAmorim",
    },
    {
      name: "Discord",
      icon: "discord",
      link: "https://discord.com/users/643069973480079361",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/adson-amorim/",
    },
    {
      name: "Instagram",
      icon: "instagram",
      link: "https://www.instagram.com/_adsonamorim/",
    },
  ];

  return (
    <HomePage>
      <Head>
        <title>Adson Dev</title>
      </Head>
      <ProfileImg
        src="/assets/profile.jpeg"
        width={100}
        height={100}
        alt="Adson Amorim"
      />

      <h2 className="userName">Adson Amorim</h2>
      <p className="userNick">@_adsonamorim</p>

      {SocialLinks.map((link) => {
        return <SocialLink link={link} key={link.name} />;
      })}

      <p className="footer">Feito com ♥️ por Adson</p>
    </HomePage>
  );
}
