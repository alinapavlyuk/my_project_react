import "./partners-list.scss";

type PartnersListProps = {
  partners: {
    name: string;
    image: string;
  }[];
};
export function PartnersList({ partners }: PartnersListProps) {
  return (
    <div className="partners-list">
      {partners.map((partner) => {
        return (
          <img
            src={"./images/partners_logos/" + partner.image}
            alt={partner.name}
            className="partner-logo"
            key={partner.name}
          />
        );
      })}
    </div>
  );
}
