const size = {
  mobile: "500px",
  tablet: "768px",
  smalldesktop: "1200px",
  desktop: "1500px"
};
export const device = {
  desktop: `@media (max-width: ${size.desktop})`,
  smalldesktop: `@media (max-width: ${size.smalldesktop})`,
  tablet: `@media (max-width: ${size.tablet})`,
  mobile: `@media (max-width: ${size.mobile})`
};
