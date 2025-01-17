import type { RequiredField, SerializeDateToNumber, Activity } from 'redux/interfaces';
import type { ActivityApiGetActivityRequest } from 'generated-sources';
import { ActivityType } from 'generated-sources';
import { addDays, endOfDay } from 'date-fns';
import { activityListSize } from 'redux/thunks';

export type ActivityQuery = RequiredField<
  SerializeDateToNumber<ActivityApiGetActivityRequest>,
  'type'
>;

export type ActivitySingleFilterNames = keyof Pick<
  ActivityQuery,
  'datasourceId' | 'namespaceId' | 'eventType'
>;
export type ActivityMultipleFilterNames = keyof Pick<
  ActivityQuery,
  'tagIds' | 'ownerIds' | 'userIds'
>;

export interface ActivityFilterOption {
  id: number;
  name: string;
  important?: boolean;
}

export interface ActivityItemProps {
  activity: Activity;
  hideAllDetails: boolean;
  dataQA?: string;
}

const beginDate = endOfDay(addDays(new Date(), -5)).getTime();
const endDate = endOfDay(addDays(new Date(), 1)).getTime();

export const defaultActivityQuery: ActivityQuery = {
  beginDate,
  endDate,
  size: activityListSize,
  type: ActivityType.ALL,
};
