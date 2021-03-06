import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const prodUri = "http://35.225.62.128:8080/v1/graphql";
const devUri = "http://35.220.182.160:8080/v1/graphql";

let uri: string = process.env.NODE_ENV === "production" ? prodUri : devUri;

const httpLink = createHttpLink({ uri });

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          recipe: {
            keyArgs: ["where"],
            merge: (curr = [], incoming) => {
              return [...curr, ...incoming];
            },
          },
        },
      },
    },
  }),
});

export default client;
