import { LinkType } from "../types/common.types";

type MenuType = {
  link: LinkType;
  subLinks?: LinkType[];
};

export const menuMock: MenuType[] = [
  {
    link: {
      title: "Business & Management",
      href: "#",
    },
  },
  {
    link: {
      title: "Computing & IT",
      href: "#",
    },
  },
  {
    link: {
      title: "Fashion & Media",
      href: "#",
    },
  },
  {
    link: {
      title: "Finance & Accounting",
      href: "#",
    },
  },
  {
    link: {
      title: "Law & Criminology",
      href: "#",
    },
  },
  {
    link: {
      title: "Marketing & Communications",
      href: "#",
    },
  },
  {
    link: {
      title: "Psychology & Social Sciences",
      href: "#",
    },
    subLinks: [
      {
        title: "Market Research Executive",
        href: "#",
      },
      {
        title: "Child Psychologist",
        href: "#",
      },
      {
        title: "Guidance Counsellor",
        href: "#",
      },
      {
        title: "Behaviour Analyst",
        href: "#",
      },
      {
        title: "Recreational Therapist",
        href: "#",
      },
    ],
  },
];
