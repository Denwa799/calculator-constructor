export interface IAppButton {
  title: string;
  styleClass?: string;
  type?: 'primary';
  onClick: () => void;
}
