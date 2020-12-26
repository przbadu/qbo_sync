import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
} from "react-feather";

export const items = [
  {
    href: "/app/dashboard",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/app/vendors",
    icon: UsersIcon,
    title: "Vendors",
  },
  {
    href: "/app/customers",
    icon: UsersIcon,
    title: "Customers",
  },
  {
    href: "/app/products",
    icon: ShoppingBagIcon,
    title: "Products & Services",
  },
  {
    href: "/app/settings",
    icon: SettingsIcon,
    title: "Settings",
  },
];
