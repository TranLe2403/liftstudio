import Link from "next/link";
import { withRouter } from "next/router";
import React, { Children } from "react";

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);

  let active = child.props.className || null;
  if (router.pathname === props.href && props.activeClassName) {
    active = `${active !== null ? active : ""} ${
      props.activeClassName
    }`.trim();
  }

  delete props.activeClassName;

  return (
    <Link {...props} passHref>
      {React.cloneElement(child, { active })}
    </Link>
  );
};

export default withRouter(ActiveLink);
