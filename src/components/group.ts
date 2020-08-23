import { Permission } from './permission';

interface Group {
  readonly _id?: string;
  readonly id?: string;
  readonly name: string;
  readonly description?: string;
  readonly permissions: ReadonlyArray<string | Permission>;
}

export { Group };
