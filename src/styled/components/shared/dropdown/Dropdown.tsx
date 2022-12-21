import { useState } from "react";
import ArroUpIcon from "assets/icons/arrow-up-icon.svg";
import ArrowDownIcon from "assets/icons/arrow-down-icon.svg";
import { StyledImage } from "styled/elements/shared/StyledImage";
import * as S from "./Dropdown.styled";

interface DropdownProps {
  items: Item[];
  selectedItem: Item;
  onChange: (newValue: Item) => void;
}

export type Item = {
  value: string;
  label: string;
};

const Button = ({ items, selectedItem, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (item: Item) => {
    onChange(item);
    setIsOpen(false);
  };

  return (
    <S.DropdownWrapper>
      <S.DropdownBox onClick={() => setIsOpen(!isOpen)}>
        {selectedItem?.label}
        {isOpen ? (
          <StyledImage src={ArroUpIcon} alt="arrow-up-icon" width={"34px"} height={"34px"} />
        ) : (
          <StyledImage src={ArrowDownIcon} alt="arrow-down-icon" width={"34px"} height={"34px"} />
        )}
      </S.DropdownBox>
      {isOpen && (
        <S.OptionsContainer>
          {items.map(item => (
            <S.DropdownOption key={item.value} onClick={() => handleOptionChange(item)}>
              {item.label}
            </S.DropdownOption>
          ))}
        </S.OptionsContainer>
      )}
    </S.DropdownWrapper>
  );
};

export default Button;
