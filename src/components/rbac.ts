import { Permission } from './permission';

interface RBAC {
  readonly _id?: string;
  readonly id?: string;
  readonly permissions: ReadonlyArray<string | Permission>;
}

export { RBAC };
