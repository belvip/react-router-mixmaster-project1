import styled from 'styled-components';

const Wrapper = styled.nav`

    background: var(--white);
    .nav-center {
        width: var(--view-width);
        max-width: var(--max-width);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding: 1.5rem 2rem;
    }

    .logo {
        /* The 'clamp()' function is used to create a responsive font size.
        It sets a minimum size (1.5rem), an ideal size (3vw), and a maximum size (3rem).
        - '1.5rem': The smallest size, ensuring the font doesn't go below this.
        - '3vw': The preferred size based on the viewport width (responsive).
        - '3rem': The maximum size the font can grow to, ensuring it doesn't exceed this. */
        font-size: clamp(1.5rem, 3vw, 3rem);

        /* Sets the color using a CSS variable called --primary-500 */
        color: var(--primary-500);

        /* Makes the text bold */
        font-weight: 700;

        /* Adds space between letters */
        letter-spacing: 2px;
    }

    .nav-links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 1rem;
    }

    .nav-link {
        color: var(--grey-900);
        padding: 0.5rem 0.5rem 0.5rem 0;
        transition: var(--transition);
        letter-spacing: 1px;
    }

    .nav-link:hover {
        color: var(--primary-500);
    }

    .active {
        color: var(--primary-500);
    }

    @media (min-width: 768px) {
        .nav-center {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        }
        .nav-links {
        flex-direction: row;
        margin-top: 0;
        }
    }
`;

export default Wrapper;