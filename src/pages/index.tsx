import { AppShell, Header, Navbar, Grid, Group, Button } from '@mantine/core';
import type { NextPage } from 'next';
import { ThemeToggler } from '../components/darkmode-toggle';
import { MainCard } from '../components/main-card';

const Home: NextPage = () => {
  return (
    <>
      <AppShell
        padding="md"
        header={
          <Header height={45} p="xs">
            <Group position="apart">
              <Group>Header</Group>
              <Group
                position="right"
                p="m"
                m="m"
                style={{ display: 'flex-end' }}
              >
                <ThemeToggler />
              </Group>
            </Group>
          </Header>
        }
        footer={<span>Footer</span>}
      >
        <Grid p="lg">
          <Grid.Col span={3} style={{ minWidth: 80 }}>
            <MainCard cardName={'To-Do'} />
          </Grid.Col>
          <Grid.Col span={3} style={{ minHeight: 80 }}>
            <MainCard cardName={'Doing'} />
          </Grid.Col>
          <Grid.Col span={3} style={{ minHeight: 80 }}>
            <MainCard cardName={'Done'} />
          </Grid.Col>
        </Grid>
      </AppShell>
    </>
  );
};

export default Home;
