import { AppShell, Header, MantineProvider, Navbar, Grid } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { MainCard } from '../components/main-card';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Grid p="lg">
      <Grid.Col span={2} style={{ minHeight: 80 }}>
        <MainCard />
      </Grid.Col>
      <Grid.Col span={2} style={{ minHeight: 80 }}>
        <MainCard />
      </Grid.Col>
      <Grid.Col span={2} style={{ minHeight: 80 }}>
        <MainCard />
      </Grid.Col>
    </Grid>
  );
};

export default Home;
