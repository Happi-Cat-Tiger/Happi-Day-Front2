import { useRecoilState } from 'recoil';
import { allAgreeState, singleAgreeState } from '@/atom/atom';
import { IoCheckboxOutline, IoCheckbox } from 'react-icons/io5';

interface CheckBoxProps {
  index: number;
  title: string;
}

const CheckBox = ({ index, title }: CheckBoxProps) => {
  const [allAgreements, setAllAgreements] = useRecoilState(allAgreeState);

  const [singleAgreements, setSingleAgreements] = useRecoilState(singleAgreeState);

  const handleButtonClick = () => {
    setAllAgreements(!allAgreements);
  };

  return (
    <div className="gap-2 flex cursor-pointer items-center" onClick={handleButtonClick}>
      {allAgreements ? (
        <IoCheckboxOutline className="h-6 w-6 absolute text-orange2" />
      ) : (
        <IoCheckbox className="h-6 w-6 text-orange2" />
      )}
      <div className="prose-subtitle-M text-black md:prose-subtitle-L">{title}</div>
    </div>
  );
};

export default CheckBox;
