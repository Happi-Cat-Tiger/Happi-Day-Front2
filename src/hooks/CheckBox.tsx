import { useRecoilState } from 'recoil';
import { checkBoxState } from '@/atom/atom';
import { IoCheckboxOutline, IoCheckbox } from 'react-icons/io5';

interface CheckBoxProps {
  index: number;
  title: string;
}

const CheckBox = ({ index, title }: CheckBoxProps) => {
  const [agreements, setAgreements] = useRecoilState(checkBoxState);

  const toggleButtonClick = () => {
    // agreements 상태를 토글하는 함수
    setAgreements(!agreements);
  };

  return (
    <div className="gap-2 flex cursor-pointer items-center" onClick={toggleButtonClick}>
      {agreements ? (
        <IoCheckboxOutline className="h-6 w-6 absolute text-orange2" />
      ) : (
        <IoCheckbox className="h-6 w-6 text-orange2" />
      )}
      <div className="prose-subtitle-M text-black md:prose-subtitle-L">{title}</div>
    </div>
  );
};

export default CheckBox;
