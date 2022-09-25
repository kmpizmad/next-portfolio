import { nanoid } from 'nanoid';
import { Phone } from 'react-feather';
import Social from './Social';
import withTitle, { WithTitleProps } from '../../../../hoc/withTitle';
import useSocial from '../../../../hooks/useSocial';

const SocialSection: React.FC<WithTitleProps> = () => {
  const socials = useSocial();

  return (
    <>
      <Social
        site={
          <div className="w-[30px] h-[30px] bg-[#555] text-white rounded-full">
            <Phone className="w-[30px] h-[30px] p-[6px]" />
          </div>
        }
        url="+36 30/377-2734"
      />
      {socials.map(soc => {
        return <Social key={nanoid()} {...soc} />;
      })}
    </>
  );
};

export default withTitle(SocialSection);
