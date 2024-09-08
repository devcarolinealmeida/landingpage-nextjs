import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image className="logo-ticker-image" src={acmeLogo} alt="acme Logo"/>
            <Image className="logo-ticker-image" src={quantumLogo} alt="quantum Logo"/>
            <Image className="logo-ticker-image" src={echoLogo} alt="echo Logo"/>
            <Image className="logo-ticker-image" src={celestialLogo} alt="celestial Logo"/>
            <Image className="logo-ticker-image" src={pulseLogo} alt="pulse Logo"/>
            <Image className="logo-ticker-image" src={apexLogo} alt="apex Logo"/>
          </div>
        </div>
      </div>
    </div>
  );
};
