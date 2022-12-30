export interface Modal {
  isOpen: boolean;
  setIsOpen: () => void;
}

export interface SurvivalProps {
  tipId?: number;
  title?: string;
  subtitle?: string;
  category?: string;
  homeImg?: string;
}

export interface MemberProps {
  memberId?: number;
  profileImg?: string;
  name?: string;
  role?: string[];
}
