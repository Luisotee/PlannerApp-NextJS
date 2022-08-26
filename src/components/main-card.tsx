import { Card, Group, Stack, Text } from '@mantine/core';
import { TaskCard } from './task-card';

export function MainCard() {
  return (
    <Card shadow="sm" p="lg" radius="lg" style={{ width: 300 }} withBorder>
      <Stack>
        <Group position="apart" mt="md" mb="xs">
          <Text>Começo</Text>
        </Group>
        <TaskCard />
      </Stack>
    </Card>
  );
}
