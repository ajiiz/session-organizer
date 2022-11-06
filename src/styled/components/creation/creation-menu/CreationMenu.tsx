import * as S from "styled/components/creation/creation-menu/CreationMenu.styled";

interface Props {
  selectedOption: string;
  options: string[];
  handleOptionChange: (option: string) => void;
}

const CreationMenu = ({ selectedOption, options, handleOptionChange }: Props) => {
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

export default CreationMenu;
