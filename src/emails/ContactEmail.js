import { Html, Head, Body, Container, Text, Heading, Section } from '@react-email/components';
import React from 'react';

export default function ContactEmail({ name, email, message }) {
    return React.createElement(
        Html,
        null,
        React.createElement(Head, null),
        React.createElement(
            Body,
            { style: { background: '#f4f4f4', padding: '20px' } },
            React.createElement(
                Container,
                { style: { background: '#ffffff', padding: '20px', borderRadius: '10px' } },

                React.createElement(Heading, null, '📩 New Contact Message'),

                React.createElement(
                    Section,
                    null,
                    React.createElement(Text, null, `Name: ${name}`),
                    React.createElement(Text, null, `Email: ${email}`)
                ),

                React.createElement(
                    Section,
                    null,
                    React.createElement(Text, null, 'Message:'),
                    React.createElement(Text, null, message)
                )
            )
        )
    );
}