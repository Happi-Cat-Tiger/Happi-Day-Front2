import { useRecoilState } from 'recoil';
import { checkBoxState } from '@/atom/atom';
import { IoCheckboxOutline, IoCheckbox } from 'react-icons/io5';

interface CheckBoxProps {
  index: number;
  title: string;
}

const CheckBox = ({ index, title }: CheckBoxProps) => {
  const [agreements, setAgreements] = useRecoilState(checkBoxState);

  return (
    <>
      {agreements ? (
        <IoCheckboxOutline className="h-[17.6px] w-[17.6px] text-orange2" />
      ) : (
        <IoCheckbox className="h-[17.6px] w-[17.6px] text-orange2" />
      )}
      <div className="prose-subtitle-M text-black md:prose-subtitle-L">{title}</div>
    </>
  );
};
export default CheckBox;
