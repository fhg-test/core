import { Permission } from './permission';

interface RBAC {
  readonly id: string;
  readonly permissions: ReadonlyArray<string | Permission>;
}

export { RBAC };
