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

export interface SemesterType {
  spring?: SubjectType;
  fall?: SubjectType;
}

export interface MajorType {
  name?: string;
  engName?: string;
  explain?: string;
  addExplain?: string;
}
export interface MinorType {
  name?: string;
  addExplain?: string;
}

export interface SubjectType {
  majorRequired?: MajorType[];
  majorChoice?: MajorType[];
  minorRequired?: MinorType[];
  minorChoice?: MinorType[];
}

export interface CurriProps {
  id?: number;
  major?: string;
  freshmen?: SemesterType;
  sophomore?: SemesterType;
  junior?: SemesterType;
  senior?: SemesterType;
}
