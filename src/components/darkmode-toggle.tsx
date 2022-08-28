import { ActionIcon, Button, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';

export function ThemeToggler() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
    >
      {colorScheme === 'dark' ? (
        <IconSun size={36} />
      ) : (
        <IconMoonStars size={36} />
      )}
    </ActionIcon>
  );
}
