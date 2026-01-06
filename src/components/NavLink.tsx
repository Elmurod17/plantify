import { NavLink } from "react-router-dom";

const SimpleNavLink = ({ to, children, className = "" }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${className} ${
          isActive ? "text-primary font-semibold" : "text-muted-foreground"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default SimpleNavLink;
