import React from 'react'

function Footer() {
    const styles = {
        footer: {
            backgroundColor: '#1E3A8A',
            color: 'white',
            textAlign: 'center',
            padding: '1rem',
            marginTop: '2rem'
        }
    };

    return (
        <footer style={styles.footer}>
            &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </footer>
    );
}

export default Footer