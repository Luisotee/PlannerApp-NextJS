import { ActionIcon, Button, Card, Group, TextInput } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { IconCircleCheck } from '@tabler/icons';
import { AddTaskCardProps, Itodo } from '../types';

export function InputCard({ tasksHandler }: AddTaskCardProps) {
  const [inputValue, setInputValue] = useInputState('');

  function addTask() {
    const newTask: Itodo = {
      todo: inputValue,
    };
    //puts newTask (together with todo) in the main-card
    tasksHandler.append(newTask);
    setInputValue('');
  }

  function submitEnter(e: { key: string }) {
    if (e.key === 'Enter') {
      addTask();
    }
  }

  return (
    <Card shadow="sm" p="xs" radius="md" withBorder>
      <Group position="apart" mt="xs" mb="xs">
        <TextInput
          placeholder="Insert Task..."
          value={inputValue}
          onChange={setInputValue}
          onKeyDown={submitEnter}
          style={{ width: 310 }}
          required
        ></TextInput>
        <Group position="apart">
          <ActionIcon onClick={addTask}>
            <IconCircleCheck />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}
