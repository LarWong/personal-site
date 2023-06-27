import { Social, SocialMediaInterface } from "../data/DataInterfaces";
import { Icon } from "@iconify/react/dist/iconify.js";

const SocialEntry = ({ label, url, iconName }: Social) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="social__link">
      <Icon className={`bx social__icon`} icon={iconName} /> {label}
    </a>
  );
};

export const SocialMedia = ({ socials }: SocialMediaInterface) => {
  return (
    <section className="social section">
      <h2 className="section-title">Socials</h2>
      <div className="social__container bd-grid">
        {socials.map((social) => (
          <SocialEntry key={social.platform} {...social} />
        ))}
      </div>
    </section>
  );
};
