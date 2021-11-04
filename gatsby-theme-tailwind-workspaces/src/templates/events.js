import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import EventList from '../components/event-list';

const EventsTemplate = () => {
  return (
    <Layout>
      <p className="text-4xl text-blue-600 z-[3]">TEST</p>
      <p className="test">test</p>
    </Layout>
  );
};

export default EventsTemplate;
