import json from "../../../data/contacts.json";
import "./contact.scss";
import { EmailList } from "../../elements/email-list/EmailList";
import { SocialsList } from "../../elements/socials-list/SocialsList";
import { PartnersList } from "../../elements/partners-list/PartnersList";

export function Contact() {
  return (
    <main className="contact-main">
      <h2>FOR ANY TYPE OF QUESTIONS PLEASE CONTACT ONE OF THESE E-MAILS:</h2>
      <EmailList emails={json.emails} />
      <h2>REDRUMER ON SOCIAL MEDIA:</h2>
      <SocialsList socials={json.socials} />
      <p className="contact-text">
        Unlike the artist Redrumer, RED4L, CHASE & TPAYP don’t have an official
        social media accounts. The only way you <br /> can contact them is by
        the e-mails listed above.
      </p>
      <PartnersList partners={json.partners} />
    </main>
  );
}
