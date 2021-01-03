import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query GetProfile($uid: String!) {
    user(where: { id: { _eq: $uid } }) {
      email
      name
      img
    }
  }
`;
