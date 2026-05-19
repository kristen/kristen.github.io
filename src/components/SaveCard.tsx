interface Props {
  title: string;
  body: string;
}

export function SaveCard({ title, body }: Props) {
  return (
    <div className="callout save-card">
      <b>{title}</b><br />
      <span dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}
