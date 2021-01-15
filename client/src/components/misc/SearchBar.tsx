import styled from "@emotion/styled";
import { IonSearchbar } from "@ionic/react";

const StyledSearchBar = styled(IonSearchbar)`
  --color: var(--ion-color-primary);
  --icon-color: var(--ion-color-primary);
  --box-shadow: none;

  .searchbar-has-focus {
    border: 1px solid var(--ion-color-primary);
  }

  & > div {
    border: 1px solid var(--ion-color-primary);
  }
`;

export default StyledSearchBar;
