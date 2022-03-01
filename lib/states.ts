import { EnumStringHelper } from './utils/enumHelper';

export enum States {
  Init = 'init',
  Idle = 'idle',
  Joy = 'joy',
  Surprise = 'surprise',
  Upset = 'upset',
  Yes = 'yes',
  No = 'no',
  Hey = 'hey',
  Shake = 'shake',
  Tap = 'tap',
  Listen = 'listen',
  Question = 'question',
}

export namespace States {
  export const Helper = new EnumStringHelper<States>(States);
}