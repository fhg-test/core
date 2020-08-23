import { Group } from './group';

interface User {
  readonly _id?: string;
  readonly id: string;
  readonly displayName?: string;
  readonly credentials: {
    readonly email: string;
    readonly password: string;
  };
  readonly groups: Group[];
}

export { User };
