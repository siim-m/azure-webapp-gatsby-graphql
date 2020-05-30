import React from "react";
import { Link } from "gatsby";
import { gql } from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import client from '../gatsby-theme-apollo/client';

const QUERY = gql`
  {
    hello
  }
`;

const IndexPage = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) return <div />
  return (
    <ApolloProvider client={client}>
      <Layout>
        <SEO title="Home" />
        <h1>Hello!</h1>
        <p>{error ? 'Error' : data.hello}</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </Layout>
    </ApolloProvider>
  );
};

export default IndexPage;
