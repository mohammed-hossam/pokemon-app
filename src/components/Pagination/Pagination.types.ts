export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (next: number) => void;
  isDisabled?: boolean;
  windowSize?: number;
}

export type PageItem = number | '…';
