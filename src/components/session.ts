import { User } from './user';

interface Session {
  readonly id: string;
  readonly cookie?: any;
  readonly passport?: any;
  readonly user?: string | User;
}

export { Session };
