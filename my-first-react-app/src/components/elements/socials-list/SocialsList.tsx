import "./socials-list.scss";

type SocialsListProps = {
  socials: {
    name: string;
    image: string;
    link: string;
  }[];
};

export function SocialsList({ socials }: SocialsListProps) {
  return (
    <div className="socials-list">
      {socials.map((social) => {
        return (
          <a href={social.link} key={social.name} target="_blank">
            <div className="social-logo-container">
              <img
                src={"./images/socials_logos/" + social.image}
                alt={social.name}
                className="social-logo"
              />
            </div>
          </a>
        );
      })}
    </div>
  );
}
