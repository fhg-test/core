import { Group } from './group';

interface User {
  readonly id: string;
  readonly displayName?: string;
  readonly credentials: {
    readonly email: string;
    readonly password: string;
    readonly salt: string;
  };
  readonly groups: ReadonlyArray<string | Group>;
}

export { User };
