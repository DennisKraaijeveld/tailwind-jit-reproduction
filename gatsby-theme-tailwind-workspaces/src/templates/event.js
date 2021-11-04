import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Event from '../components/event';

const EventTemplate = ({ data: { event } }) => (
  <Layout>
    <p>TEST</p>
  </Layout>
);

export default EventTemplate;
