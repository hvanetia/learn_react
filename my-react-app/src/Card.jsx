import React from 'react';

export default function Card({ title, description, image }) {
    const styles = {
        card: {
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            maxWidth: '300px',
            lineheight: 'max-content',
            background: '#c0bdbd'
        },
        image: {
            width: '100%',
            height: '200px',
            objectFit: 'cover'
        },
        content: {
            padding: '1rem'
        },
        title: {
            fontSize: '1.25rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem'
        },
        description: {
            color: '#6b7280'
        }
    };

    return (
        <div style={styles.card}>
            {image && <img src={image} alt={title} style={styles.image} />}
            <div style={styles.content}>
                <h2 style={styles.title}>{title}</h2>
                <p style={styles.description}>{description}</p>
            </div>
        </div>
    );
}
