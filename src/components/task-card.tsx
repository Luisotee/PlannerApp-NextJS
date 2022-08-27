import { Card, Group, Text } from '@mantine/core';
import { useState } from 'react';
import { TaskCardProps } from '../types';

//receiving tasksHandler from the main card useList, this will serve so that I can remove a task-card from the mainCard (WiP)
//the todo is from the ??
export function TaskCard({ todo, tasksHandler }: TaskCardProps) {
  return (
    <Card shadow="sm" p="xs" radius="md" withBorder>
      <Group position="left" mt="xs" mb="xs">
        {/* Gets todo from the maincard which was put in the add-task */}
        <Text>{todo.todo}</Text>
      </Group>
    </Card>
  );
}
