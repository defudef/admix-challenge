interface Props {
  title?: string;
  publisher?: string;
  image?: string;
}

const TitlePublisher = ({ title, publisher, image }: Props) => (
  <div>
    {title}
  </div>
);

export default TitlePublisher;
