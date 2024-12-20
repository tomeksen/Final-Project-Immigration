export type Event = {
  eventDateStart: string;
  eventDateFinish: string;
  eventTypeId: number;
  id: number;
  isOnline: boolean;
  meetingCode: string;
  title: string;
  userId: string;
};

export type EventFiltered = {
  startDate: Date;
  endDate: Date;
  title: string;
  location: string;
  details: string;
};
