import { Card, Group, Stack, Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from 'react';
import { Itodo, MainCard } from '../types';
import { InputCard } from './input-card';
import { TaskCard } from './task-card';

export function MainCard({ cardName }: MainCard) {
  const [mainCard, tasksHandler] = useListState<Itodo>(); //Initializing the state of a entire main card, together with the tasksHandler which serves to modify this list (ofc)

  function handleCardName() {
    //Future card name changer
  }

  return (
    <Card shadow="sm" p="xs" radius="md" style={{ width: 410 }} withBorder>
      <Stack>
        <Group position="center" mt="xs" mb="xs">
          <Text align="center">{cardName}</Text>
        </Group>
        {mainCard.map((Itodo) => (
          <TaskCard todo={Itodo} tasksHandler={tasksHandler} /> //Puts the last data from the array into taskcard
        ))}
        <InputCard tasksHandler={tasksHandler} />
      </Stack>
    </Card>
  );
}
