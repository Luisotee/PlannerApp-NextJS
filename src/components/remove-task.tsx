import { Button } from '@mantine/core';
import { AddTaskCardProps } from '../types';

export function RemoveTask({ tasksHandler }: AddTaskCardProps) {
  tasksHandler.pop();

  return <Button>Remove</Button>;
}
