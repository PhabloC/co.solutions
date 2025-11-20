export interface NavigationItem {
  name: string;
  href: string;
}

export interface AnnouncementBanner {
  text: string;
  linkText: string;
  linkHref: string;
}

export interface CallToAction {
  text: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface HeroLandingProps {
  // Hero content
  title: string;
  description: string;
  announcementBanner?: AnnouncementBanner;
  callToActions?: CallToAction[];

  // Styling options
  titleSize?: "small" | "medium" | "large";
  gradientColors?: {
    from: string;
    to: string;
  };

  // Additional customization
  className?: string;
}
