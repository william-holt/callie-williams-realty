import * as React from 'react';

interface ListingContactEmailProps {
  firstName: string;
}

export const ListingContactEmail: React.FC<Readonly<ListingContactEmailProps>> = ({
                                                                        firstName,
                                                                      }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);
