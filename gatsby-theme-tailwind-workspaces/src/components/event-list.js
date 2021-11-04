import React from 'react';
import { Link } from 'gatsby';

const EventList = ({ events }) => {
  return (
    <>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>
              <Link to={event.slug} className="text-3xl text-white">
                {event.name}
              </Link>
            </strong>
            <br />
            {new Date(event.startDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}{' '}
            in {event.location}
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventList;
