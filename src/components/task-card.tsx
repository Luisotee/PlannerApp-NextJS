import { Card, Group, Text } from '@mantine/core';

export function TaskCard() {
  return (
    <Card shadow="sm" p="lg" radius="lg">
      <Group position="apart" mt="md" mb="xs">
        <Text>To-Do</Text>
      </Group>
    </Card>
  );
}
