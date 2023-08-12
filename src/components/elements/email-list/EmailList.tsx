import "./email-list.scss";

type EmailListProps = {
  emails: string[];
};

export function EmailList({ emails }: EmailListProps) {
  return (
    <div className="email-list">
      {emails.map((email) => {
        return (
          <p className="email" key={email}>
            {email}
          </p>
        );
      })}
    </div>
  );
}
