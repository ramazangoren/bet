
import React from 'react';
import {
  MantineProvider,
  AppShell,
  Box,
  Button,
  Card,
  Container,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
  ThemeIcon,
  Badge,
} from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import {
  IconArrowUpRight,
  IconBrandTelegram,
  IconGift,
  IconPhone,
} from '@tabler/icons-react';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

const heroCards = [
  {
    title: '1.000 TL YATIR\n250 TL AL!',
    accent: 'pink',
  },
  {
    title: '100 FREE SPIN AL!',
    accent: 'yellow',
  },
  {
    title: 'ÖZEL SLOT\nKAMPANYASI',
    accent: 'violet',
  },
];

const bonusItems = [
  {
    image: 'https://placehold.co/90x90/120014/ff4dc4?text=BONUS',
    text: '1.000 TL yatır, canlı desteğe bağlan ve 250 TL al! Havale ile minimum 500 TL yatır.',
    button: 'GİRİŞ YAP',
    badge: 'Yeni',
  },
  {
    image: 'https://placehold.co/90x90/120014/9bff4d?text=FS',
    text: 'Canlı desteğe bağlanıp 100 free spin al! Mecacüzdan ile minimum 25 TL yatır bonus kodu: MRBAHIS 500 FS.',
    button: 'GİRİŞ YAP',
  },
  {
    image: 'https://placehold.co/90x90/120014/ffe84d?text=SPIN',
    text: 'Sweet Bonanza’da 100 free spin hemen al ve kazanmaya başla. Minimum 100 TL yatırım ile kampanyaya katıl.',
    button: 'GİRİŞ YAP',
  },
  {
    image: 'https://placehold.co/90x90/1b9df0/ffffff?text=TG',
    text: 'Güncel olarak etkinliklerin bildirimi için Telegram kanalına katıl.',
    button: 'GİRİŞ YAP',
  },
];

function GlowOrb({ size, top, left, right, bottom, opacity = 0.35 }) {
  return (
    <Box
      style={{
        position: 'absolute',
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(255,186,120,0.95) 0%, rgba(255,132,214,0.45) 35%, rgba(255,132,214,0) 72%)',
        filter: 'blur(8px)',
        opacity,
        pointerEvents: 'none',
      }}
    />
  );
}

function DecorativeChip({ side = 'left', top = '78%' }) {
  return (
    <Box
      style={{
        position: 'absolute',
        [side]: '-110px',
        top,
        width: 240,
        height: 240,
        borderRadius: '50%',
        background:
          'radial-gradient(circle at 35% 35%, rgba(255,221,170,0.9), rgba(177,91,255,0.95) 40%, rgba(80,20,120,1) 65%, rgba(30,6,48,1) 100%)',
        boxShadow: '0 0 90px rgba(210, 90, 255, 0.35)',
        transform: 'rotate(-24deg)',
        opacity: 0.8,
        pointerEvents: 'none',
      }}
    >
      <Box
        style={{
          position: 'absolute',
          inset: 24,
          borderRadius: '50%',
          border: '14px solid rgba(255,210,170,0.45)',
        }}
      />
    </Box>
  );
}

function PromoTile({ title, accent }) {
  const glow =
    accent === 'yellow'
      ? 'rgba(255, 228, 87, 0.35)'
      : accent === 'pink'
      ? 'rgba(255, 66, 191, 0.35)'
      : 'rgba(154, 92, 255, 0.35)';

  return (
    <Paper
      radius={18}
      p="xl"
      h={250}
      style={{
        background: 'linear-gradient(180deg, rgba(3,3,8,0.98) 0%, rgba(8,4,16,0.98) 100%)',
        border: '1px solid rgba(178, 95, 255, 0.16)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.02), 0 24px 50px ${glow}`,
      }}
    >
      <Box
        style={{
          position: 'absolute',
          right: -40,
          bottom: -40,
          width: 160,
          height: 160,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${glow} 0%, rgba(0,0,0,0) 70%)`,
          filter: 'blur(10px)',
        }}
      />

      <Stack justify="space-between" h="100%">
        <Badge
          variant="light"
          color={accent === 'yellow' ? 'yellow' : accent === 'pink' ? 'pink' : 'violet'}
          size="lg"
          radius="sm"
          w="fit-content"
        >
          BONUS
        </Badge>

        <Title
          order={2}
          style={{
            color: 'white',
            fontWeight: 900,
            lineHeight: 1,
            whiteSpace: 'pre-line',
            letterSpacing: '-0.04em',
          }}
        >
          {title}
        </Title>
      </Stack>
    </Paper>
  );
}

function BonusRow({ image, text, button, badge }) {
  return (
    <Paper
      radius={24}
      p={0}
      style={{
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(88,34,126,0.96) 0%, rgba(74,28,109,0.96) 100%)',
        border: '1px solid rgba(255,255,255,0.04)',
        boxShadow: '0 18px 40px rgba(20, 4, 36, 0.35)',
      }}
    >
      <Group gap={0} align="stretch" wrap="nowrap">
        <Box
          w={128}
          miw={128}
          style={{
            position: 'relative',
            background: 'rgba(0,0,0,0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
          }}
        >
          {badge ? (
            <Badge
              color="orange"
              variant="filled"
              radius="sm"
              style={{ position: 'absolute', top: 10, left: 10 }}
            >
              {badge}
            </Badge>
          ) : null}
          <Image src={image} alt="bonus" radius="md" w={70} h={70} />
        </Box>

        <Group
          justify="space-between"
          align="center"
          wrap="nowrap"
          style={{ flex: 1, padding: '24px 22px' }}
        >
          <Text
            fw={900}
            fz={{ base: 20, sm: 26 }}
            lh={0.95}
            c="white"
            style={{ letterSpacing: '-0.04em', textTransform: 'uppercase' }}
          >
            {text}
          </Text>

          <Button
            radius="xl"
            size="xl"
            rightSection={<IconArrowUpRight size={22} />}
            style={{
              minWidth: 180,
              height: 62,
              background: 'linear-gradient(180deg, #ff49b8 0%, #df2d9d 100%)',
              color: 'white',
              fontWeight: 900,
              boxShadow: '0 10px 30px rgba(255, 73, 184, 0.35)',
            }}
          >
            {button}
          </Button>
        </Group>
      </Group>
    </Paper>
  );
}

function SignupCard() {
  return (
    <Paper
      radius={28}
      p={{ base: 'lg', sm: 'xl' }}
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(35,18,55,0.98) 0%, rgba(27,14,42,0.98) 100%)',
        border: '1px solid rgba(255,255,255,0.04)',
        boxShadow: '0 18px 40px rgba(20, 4, 36, 0.35)',
      }}
    >
      <ThemeIcon
        size={76}
        radius={76}
        color="orange"
        variant="gradient"
        gradient={{ from: 'orange', to: 'yellow' }}
        style={{ position: 'absolute', top: -34, left: '50%', transform: 'translateX(-50%)' }}
      >
        <IconGift size={42} />
      </ThemeIcon>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt={20}>
        <Stack gap={10} justify="center">
          <Text fw={900} fz={{ base: 30, sm: 38 }} lh={0.95} c="white">
            Sadece size özel en iyi bonusları ilk gören siz olmak ister misiniz?
          </Text>
          <Text fw={900} fz={{ base: 24, sm: 30 }} lh={1} c="orange.4">
            Telefon numaranızı girin ve bonusuzu şimdi etkinleştirin.
          </Text>
        </Stack>

        <Stack justify="center" gap="md">
          <TextInput
            radius="xl"
            size="xl"
            placeholder="Cep telefonu numaranız"
            leftSection={<IconPhone size={20} />}
            styles={{
              input: {
                height: 64,
                background: '#f4f4f5',
                border: 'none',
                fontWeight: 700,
                fontSize: 18,
              },
            }}
          />
          <Button
            radius="xl"
            size="xl"
            rightSection={<IconArrowUpRight size={22} />}
            style={{
              height: 62,
              background: 'linear-gradient(180deg, #ff49b8 0%, #df2d9d 100%)',
              color: 'white',
              fontWeight: 900,
              boxShadow: '0 10px 30px rgba(255, 73, 184, 0.35)',
            }}
          >
            Cep telefonu numaranız
          </Button>
        </Stack>
      </SimpleGrid>
    </Paper>
  );
}

function FooterTelegram() {
  return (
    <Paper
      radius={0}
      px="md"
      py="lg"
      style={{
        background: 'rgba(17, 8, 28, 0.96)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <Container size="lg">
        <Group justify="space-between" wrap="wrap" gap="lg">
          <Text fw={900} fz={{ base: 20, sm: 28 }} c="white" style={{ letterSpacing: '-0.03em' }}>
            ⚡ TELEGRAM ⚡ HEDİYELER İÇİN BANA KATIL ⚡
          </Text>

          <Button
            radius="xl"
            size="xl"
            leftSection={<IconBrandTelegram size={24} />}
            style={{
              minWidth: 240,
              height: 60,
              background: 'linear-gradient(180deg, #2fb5ff 0%, #1d93e8 100%)',
              color: 'white',
              fontWeight: 900,
            }}
          >
            TELEGRAM
          </Button>
        </Group>
      </Container>
    </Paper>
  );
}

export default function App() {
  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        primaryColor: 'pink',
        defaultRadius: 'md',
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
      }}
    >
      <Notifications />

      <AppShell padding={0}>
        <AppShell.Main>
          <Box
            style={{
              minHeight: '100vh',
              position: 'relative',
              overflow: 'hidden',
              background:
                'radial-gradient(circle at 50% 20%, rgba(144, 46, 255, 0.35), transparent 25%), linear-gradient(180deg, #05010b 0%, #190424 18%, #3a0d55 54%, #5e1b73 76%, #1b0d2f 100%)',
            }}
          >
            <GlowOrb size={160} top={150} left={80} opacity={0.45} />
            <GlowOrb size={120} top={360} left={110} opacity={0.5} />
            <GlowOrb size={150} top={220} right={140} opacity={0.42} />
            <GlowOrb size={180} bottom={240} right={110} opacity={0.52} />
            <GlowOrb size={110} bottom={180} left={220} opacity={0.45} />
            <DecorativeChip side="left" top="58%" />
            <DecorativeChip side="right" top="28%" />
            <DecorativeChip side="right" top="80%" />

            <Container size="lg" py={60} style={{ position: 'relative', zIndex: 2 }}>
              <Stack gap={34}>
                <Stack gap={12} align="center">
                  <Group gap="lg" align="center">
                    <ThemeIcon
                      size={92}
                      radius={22}
                      variant="gradient"
                      gradient={{ from: 'yellow', to: 'orange' }}
                    >
                      <IconGift size={52} />
                    </ThemeIcon>

                    <Stack gap={0}>
                      <Title
                        order={1}
                        fz={{ base: 42, sm: 72 }}
                        lh={0.92}
                        c="white"
                        style={{ letterSpacing: '-0.06em', textTransform: 'uppercase' }}
                      >
                        Slot Oyunları
                        <br />
                        Asgard
                      </Title>
                      <Text
                        c="gray.2"
                        fw={800}
                        fz={{ base: 18, sm: 28 }}
                        style={{ textTransform: 'uppercase', letterSpacing: '-0.04em' }}
                      >
                        Kayıt ol bonusları kap
                      </Text>
                    </Stack>
                  </Group>
                </Stack>

                <Paper
                  radius={28}
                  p="md"
                  style={{
                    background: 'rgba(23, 4, 38, 0.82)',
                    border: '1px solid rgba(255,255,255,0.03)',
                    boxShadow: '0 20px 60px rgba(10, 0, 20, 0.45)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
                    {heroCards.map((card) => (
                      <PromoTile key={card.title} {...card} />
                    ))}
                  </SimpleGrid>
                </Paper>

                <Stack gap="md">
                  {bonusItems.map((item, index) => (
                    <BonusRow key={index} {...item} />
                  ))}
                </Stack>

                <SignupCard />
              </Stack>
            </Container>

            <FooterTelegram />
          </Box>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

