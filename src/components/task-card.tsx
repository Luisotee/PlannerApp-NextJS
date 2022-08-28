import { ActionIcon, Button, Card, Group, Text } from '@mantine/core';
import { TrashIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { TaskCardProps } from '../types';
import { RemoveTask } from './remove-task';

//receiving tasksHandler from the main card useList, this will serve so that I can remove a task-card from the mainCard (WiP)
//the todo is from the main card, it passes the last data of the array
export function TaskCard({ todo, tasksHandler }: TaskCardProps) {
  function removeTask(): void {
    tasksHandler.pop();
  }

  return (
    <Card shadow="sm" p="xs" radius="md" withBorder>
      <Group position="apart" mt="xs" mb="xs">
        {/* Gets todo from the maincard which was put in the add-task */}
        <Text>{todo.todo}</Text>
        {/* <RemoveTask tasksHandler={tasksHandler}></RemoveTask> */}
        <Group position="apart">
          <ActionIcon onClick={removeTask}>
            <TrashIcon />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}
