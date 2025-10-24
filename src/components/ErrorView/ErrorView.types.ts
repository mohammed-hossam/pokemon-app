export interface ErrorViewProps {
  message: string;
  onRetry?: (...args: any[]) => unknown; // super broad
}
