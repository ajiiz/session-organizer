import * as S from "styled/components/shared/row-menu/RowMenu.styled";

interface Props {
  selectedOption: string;
  options: string[];
  handleOptionChange: (option: string) => void;
}

const RowMenu = ({ selectedOption, options, handleOptionChange }: Props) => {
  return (
    <S.OptionsWrapper>
      {options.map((option, key) => (
        <S.Option onClick={() => handleOptionChange(option)} isSelected={option === selectedOption} key={key}>
          {option}
        </S.Option>
      ))}
    </S.OptionsWrapper>
  );
};

export default RowMenu;
