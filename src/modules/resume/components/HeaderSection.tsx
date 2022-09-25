import Image from 'next/image';
import source from '../../../assets/Viktor.png';
import IInfo from '../../../interfaces/resume/IInfo';
import styles from '../../../styles/modules/resume/HeaderSection.module.scss';

interface IProps {
  info: IInfo;
}

const HeaderSection: React.FC<IProps> = props => {
  const size: number = 240;
  return (
    <div className="p-3 flex justify-between items-center ">
      <div className="flex flex-col justify-between w-full">
        <div className="mb-4 uppercase leading-tight text-gray-700">
          <h1 className="font-semibold text-5xl mt-0 mb-2">{props.info.name}</h1>
          <h2 className="font-light tracking-widest text-4xl mt-0 mb-2">{props.info.qualification}</h2>
        </div>
      </div>
      <div>
        <Image
          src={source}
          alt="My awesome pic"
          width={size}
          height={size}
          className={`rounded-full object-cover object-top ${styles['border']}`}
        />
      </div>
    </div>
  );
};

export default HeaderSection;
