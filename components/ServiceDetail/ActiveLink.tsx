/* eslint-disable react/jsx-props-no-spreading */
import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
import Link from 'next/link';
import React, { Children, ReactElement } from 'react';

type NavProps = {
    children: React.ReactNode | undefined;
    activeClassName: string;
    href: string;
};

const ActiveLink = ({ children, activeClassName, ...props }: NavProps): ReactElement => {
    const { asPath } = useRouter();
    const child = Children.only(children);
    const childClassName = child?.props.className || '';

    const className = asPath === props.href ? `${childClassName} ${activeClassName}`.trim() : childClassName;

    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    );
};

// ActiveLink.propTypes = {
//     children: PropTypes.node.isRequired,
//     activeClassName: PropTypes.string.isRequired,
//     href: PropTypes.string.isRequired,
// };

export default ActiveLink;