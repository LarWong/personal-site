import { OverviewInterface } from "../data/DataInterfaces";
import { Icon } from "@iconify/react";

import { ThemeToggle } from "./ThemeToggle";

export const Profile = ({
  summary: {
    name,
    occupation,
    location,
    email,
    telephoneNumber,
    imagePath,
    description,
  },
}: OverviewInterface) => {
  return (
    <>
      <section className="home" id="home">
        <div className="home__container section bd-grid">
          <div className="home__data bd-grid">
            <img src={imagePath} alt="profile_image" className="home__img" />
            <h1 className="home__title">
              <strong>{name}</strong>
            </h1>
            <h3 className="home__profession">{occupation}</h3>
          </div>
          <div className="home__address bd-grid home__grid">
            <span className="home__information">
              <Icon className="bx home__icon" icon={"bx:map"} />
              {location}
            </span>
            <span className="home__information">
              <Icon className="bx home__icon" icon={"bx:envelope"} />
              {email}
            </span>
            <span className="home__information">
              <Icon className="bx home__icon" icon={"bx:phone"} />
              {telephoneNumber}
            </span>
          </div>
        </div>
        <ThemeToggle />
      </section>
      <section className="summary section" id="summary">
        <h2 className="section-title">About Me</h2>
        <p className="summary__description">{description}</p>
      </section>
    </>
  );
};
