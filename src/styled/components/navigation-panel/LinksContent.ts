import CreationIcon from "assets/icons/navigation-panel/creation-icon.svg";
import DashboardIcon from "assets/icons/navigation-panel/dashboard-icon.svg";
import ManagementIcon from "assets/icons/navigation-panel/management-panel-icon.svg";
import AlertsIcon from "assets/icons/navigation-panel/alerts-icon.svg";
import AdminIcon from "assets/icons/navigation-panel/admin-icon.svg";
import AccountSettingsIcon from "assets/icons/navigation-panel/account-settings-icon.svg";

export const LinksContent = [
  {
    paragraph: "Creation Panel",
    src: CreationIcon,
    alt: "Creation panel icon",
    url: "/creation"
  },
  {
    paragraph: "Dashboard",
    src: DashboardIcon,
    alt: "Dashboard icon",
    url: "/dashboard"
  },
  {
    paragraph: "Account Settings",
    src: AccountSettingsIcon,
    alt: "Account settings icon",
    url: "/account-settings"
  },
  {
    paragraph: "Management Panel",
    src: ManagementIcon,
    alt: "Management panel icon",
    url: "/management-panel"
  },
  {
    paragraph: "Feed & Alerts",
    src: AlertsIcon,
    alt: "Feed & alerts icon",
    url: "/feed"
  },
  {
    paragraph: "Admin Panel",
    src: AdminIcon,
    alt: "Admin panel icon",
    url: "/admin-panel"
  }
];
