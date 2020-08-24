import { Group } from './group';

interface User {
  readonly id: string;
  readonly displayName?: string;
  readonly credentials: {
    readonly email: string;
    readonly password: string;
    readonly salt: string;
  };
  readonly groups: Group[];
}

export { User };
