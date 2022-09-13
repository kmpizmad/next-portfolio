import Social from '../components/Social';
import ISocial from '../interfaces/resume/ISocial';

interface Props {
  title: string;
  socials: ISocial[];
}

const SocialSection: React.FC<Props> = props => {
  return (
    <div>
      <div className="text-xl  font-bold tracking-wide uppercase underline">{props.title}</div>
      {props.socials.map((soc, i) => {
        const key = `${soc.url}-${i}`;
        return <Social key={key} {...soc} />;
      })}
    </div>
  );
};

export default SocialSection;
