import { withRouter } from "next/router";
import Layout from "../components/MyLayout";
import React from 'react'

const Content = withRouter(props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is a blog post content.</p>
  </div>
));

const Page = () => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;
