import { ReactNode } from "react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterCopyright {
  text: string;
  license?: string;
}

export interface FooterProps {
  logo: ReactNode;
  brandName: string;
  mainLinks: FooterLink[];
  legalLinks: FooterLink[];
  copyright: FooterCopyright;
}
