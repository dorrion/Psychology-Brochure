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
}

export interface SubjectType {
  majorRequired?: MajorType[];
  majorChoice?: string[];
  minorRequired?: string[];
  minorChoice?: string[];
}

export interface CurriProps {
  id?: number;
  major?: string;
  freshmen?: SemesterType;
  sophomore?: SemesterType;
  junior?: SemesterType;
  senior?: SemesterType;
}
