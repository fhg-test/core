import { User } from './user';

interface BookingStatus {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
}

interface BookingType {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
}

interface Booking {
  readonly id: string;
  readonly type: string | BookingType;
  readonly location: string;
  readonly dates: Date[];
  readonly approvedDate?: Date;
  readonly status: string | BookingStatus;
  readonly createdBy: string | User;
}

export { BookingStatus, BookingType, Booking };
