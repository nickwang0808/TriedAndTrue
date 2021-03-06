import { gql, useLazyQuery } from "@apollo/client";
import {
  GetProfileQuery,
  GetProfileQueryVariables,
} from "../../generated/graphql";

export const GET_PROFILE = gql`
  query GetProfile($uid: String!) {
    user(where: { id: { _eq: $uid } }) {
      email
      name
      img
    }
  }
`;

export default function useGetProfileQuery() {
  return useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GET_PROFILE);
}
