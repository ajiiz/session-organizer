import { useCreation } from "styled/components/creation/useCreation";
import * as S from "styled/components/creation/creation-menu/CreationMenu.styled";

const CreationMenu = () => {
  const { selectedOption, options, handleOptionChange } = useCreation();

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
