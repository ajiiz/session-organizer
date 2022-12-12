import PageInformation from "styled/components/shared/page-info/PageInformation";
import { useManagement } from "styled/components/management-panel/useManagement";
import RowMenu from "styled/components/shared/row-menu/RowMenu";
import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import { Loader } from "styled/elements/shared/Loader";
import { ManagementTable } from "styled/components/management-panel/management-table/ManagementTable";
import * as SS from "styled/components/shared/page-wrapper/PageWrapper.styled";

const ManagementMain = () => {
  const { selectedOption, options, handleOptionChange, isLoading, events, handleRemoveEvent } = useManagement();

  return (
    <SS.ContentWrapper>
      <SS.ContentContainer>
        <PageInformation
          shouldCenterOnMobile={true}
          header={"Upcoming events"}
          paragraph={
            "View all of your events and make sure you participate in them in time. Also manage them and modify as you design."
          }
        />
        <RowMenu selectedOption={selectedOption} handleOptionChange={handleOptionChange} options={options} />
        {isLoading ? (
          <Wrapper width={"100%"} height={"10rem"} display={"flex"}>
            <Loader />
          </Wrapper>
        ) : (
          <ManagementTable events={events} handleRemoveEvent={handleRemoveEvent} />
        )}
      </SS.ContentContainer>
    </SS.ContentWrapper>
  );
};

export default ManagementMain;
