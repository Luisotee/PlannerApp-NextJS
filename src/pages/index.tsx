import { AppShell, Header, Navbar, Grid, Group, Button } from '@mantine/core';
import type { NextPage } from 'next';
import { ThemeToggler } from '../components/darkmode-toggle';
import { MainCard } from '../components/main-card';

const Home: NextPage = () => {
  return (
    <>
      <Group position="right" p="xs" mr="xs">
        <ThemeToggler />
      </Group>
      <Grid p="lg">
        <Grid.Col span={2} style={{ minHeight: 80 }}>
          <MainCard /> {/*Initializing 3 initial cards*/}
        </Grid.Col>
        <Grid.Col span={2} style={{ minHeight: 80 }}>
          <MainCard />
        </Grid.Col>
        <Grid.Col span={2} style={{ minHeight: 80 }}>
          <MainCard />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Home;
