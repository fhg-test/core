import { User } from './user';

interface BookingStatus {
  readonly _id?: string;
  readonly id?: string;
  readonly name: string;
  readonly description?: string;
}

interface BookingType {
  readonly _id?: string;
  readonly id?: string;
  readonly name: string;
  readonly description?: string;
}

interface Booking {
  readonly _id?: string;
  readonly id?: string;
  readonly type: string | BookingType;
  readonly location: string;
  readonly dates: Date[];
  readonly confirmedDate?: Date;
  readonly status: string | BookingStatus;
  readonly createdBy: string | User;
}

export { BookingStatus, BookingType, Booking };
