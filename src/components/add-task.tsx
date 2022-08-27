import { Button, Card, Group, Text } from '@mantine/core';
import { UseListStateHandlers } from '@mantine/hooks';
import { AddTaskCardProps, Itodo } from '../types';

//receiving tasksHandler from the main card useList, serves so that I can add new task-card to the main-card
export function AddTaskCard({ tasksHandler }: AddTaskCardProps) {
  function addTask() {
    const newTask: Itodo = {
      todo: 'É a',
    };
    //puts newTask (together with todo) in the main-card
    tasksHandler.append(newTask);
  }

  return (
    <Group p="xs" position="center" mt="xs" mb="xs">
      <Button onClick={addTask} fullWidth variant="gradient">
        Add a card
      </Button>
    </Group>
  );
}
