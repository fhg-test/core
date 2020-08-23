// domain entity
enum Entity {
  BookingStatus = 'booking-status',
  BookingType = 'booking-type',
  Booking = 'booking',
  Group = 'group',
  Permission = 'permission',
  RBAC = 'rbac',
  Session = 'session',
  User = 'user',
}

// entity action
enum Action {
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

export { Entity, Action };
