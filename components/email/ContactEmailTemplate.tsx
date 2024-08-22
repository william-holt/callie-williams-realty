import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName?: string;
  message?: string;
  email?: string;
  listing?: any;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
                                                                        firstName,
                                                                        lastName,
                                                                        message,
                                                                        email,
                                                                        listing
                                                                      }) => (
  <div>
    <h1>Hello, Callie!</h1>

    <div>
      {firstName}&nbsp;{lastName} just reached out! The message is below:
    </div>
    {message && (
      <div>
        {message}

        <div>
          {email && (
            <div>Email: {email}</div>
          )}
        </div>
      </div>
    )}

    <div>
      {listing && (
        <div>
          Showing Requested at {listing.name}
        </div>
      )}
    </div>
  </div>
);
