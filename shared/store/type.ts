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

export interface CarrerProps {
  tipId?: number;
  title?: string;
  subtitle?: string;
  carrerImg?: string;
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

export interface EnglishProps {
  english?: string;
  score?: string;
}

export interface AnswerType {
  name?: string;
  content?: string;
  color?: number;
}

export interface QnAProps {
  id?: number;
  question?: string;
  answer?: AnswerType[];
}
export interface MajorQnAProps {
  id?: number;
  question?: string;
  answer?: AnswerType[];
}

export interface MajorProps {
  id: number;
  major: string;
  explain: QnAProps;
}

export interface MoneyProps {
  category: string;
  name: string;
  description: string;
  benefit: string;
}
