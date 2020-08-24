import { User } from './user';

interface Session {
  readonly id: string;
  readonly session: string;
  readonly expires: Date;
  readonly user?: string | User;
}

export { Session };
