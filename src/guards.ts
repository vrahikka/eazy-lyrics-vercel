import { ErrorMessage } from './types';

export function isError(value: unknown): value is ErrorMessage {
  if ((value as ErrorMessage)?.statusCode) {
    return true;
  }
  return false;
}
