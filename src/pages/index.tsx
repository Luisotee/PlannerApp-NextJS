import {
  AppShell,
  Header,
  Navbar,
  Grid,
  Group,
  Button,
  Text,
  Title,
  SimpleGrid,
} from '@mantine/core';
import type { NextPage } from 'next';
import { ThemeToggler } from '../components/darkmode-toggle';
import { MainCard } from '../components/main-card';

const Home: NextPage = () => {
  return (
    <>
      <AppShell
        padding="md"
        header={
          <Header height={45} p="xs" withBorder={false}>
            <Group position="apart">
              <Title order={3}>PlanerAPP</Title>
              <Group position="right">
                <ThemeToggler />
              </Group>
            </Group>
          </Header>
        }
      >
        <SimpleGrid cols={3} m="md">
          <MainCard cardName={'To-Do'} />
          <MainCard cardName={'Doing'} />
          <MainCard cardName={'Done'} />
        </SimpleGrid>
      </AppShell>
    </>
  );
};

export default Home;
