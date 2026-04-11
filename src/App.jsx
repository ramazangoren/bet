import React, { useState } from 'react';
import {
  MantineProvider,
  AppShell,
  Box,
  Container,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
  ThemeIcon,
  AspectRatio,
  Anchor,
  Flex,
  SimpleGrid,
} from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import {
  IconArrowUpRight,
  IconBrandTelegram,
  IconGift,
  IconPhone,
  IconBriefcase,
} from '@tabler/icons-react';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import betbalina from './assets/betbalina.jpeg';
import hadiwin from './assets/hadiwin.jpeg';
import gif1 from './assets/gif1.gif';
import gif2 from './assets/gif2.gif';
import gif3 from './assets/gif3.gif';

const SITE_URL = 'https://your-casino-site.com';
const TELEGRAM_URL = 'https://t.me/slotac';

const heroCards = [
  { title: '1.000 TL YATIR - 250 TL AL!', accent: 'pink', image: betbalina, href: 'https://www.betbalina134.com/tr/casino/slots' },
  { title: '100 FREE SPIN AL!', accent: 'yellow', image: hadiwin, href: 'http://hadiwin.direct/#/?btag=2710669' },
  { title: '100 FREE SPIN AL!', accent: 'violet', image: betbalina, href: 'https://www.betbalina134.com/tr/casino/slots' },
];

const heroGifs = [
  { title: '1.000 TL YATIR - 250 TL AL!', accent: 'pink', image: gif1, href: 'https://www.betbalina134.com/tr/casino/slots' },
  { title: '100 FREE SPIN AL!', accent: 'yellow', image: gif2, href: 'http://hadiwin.direct/#/?btag=2710669' },
  { title: '100 FREE SPIN AL!', accent: 'violet', image: gif3, href: 'https://www.betbalina134.com/tr/casino/slots' },
];

const bonusItems = [
  { image: hadiwin, text: 'İlk yatırımına özel %100 Spor & Slot Hoş Geldin Bonusu ile oyuna güçlü bir başlangıç yap', badge: true, href: 'http://hadiwin.direct/#/?btag=2710669' },
  { image: betbalina, text: 'BetBalina\'da  %125 Nakit Seni Bekliyor!✨', badge: true, href: 'https://www.betbalina134.com/tr/casino/slots' },
  { image: gif1, text: '1.000 TL yatır canlı desteğe bağlan ve 250 TL al! Havale ile minimum 500 TL yatır', badge: true, href: 'http://hadiwin.direct/#/?btag=2710669' },
  { image: gif2, text: 'MRBAHIS500FS KODU İLE CANLI DESTEĞE BAĞLANIP 100 FREE SPİN AL! MEGACÜZDAN İLE MİNİMUM 25 TL YATIR', href: 'https://www.betbalina134.com/tr/casino/slots' },
  { image: gif3, text: "SWEET BONANZA'DA 100 FREE SPİN HEMEN AL VE KAZANMAYA BAŞLA : TRBON100B ECOPAYZ İLE MİNİMUM 100 TL YATIR", href: 'http://hadiwin.direct/#/?btag=2710669' },
  { image: null, text: '⚡ GÜNCEL OLARAK ETKİNLİKLERİN BİLDİRİMİ İÇİN TIKLA ⚡', telegram: true, href: TELEGRAM_URL },
];

// ─── Background decorations ────────────────────────────────────────────────

function GlowOrb({ size, top, left, right, bottom, opacity = 0.35, blur = 14 }) {
  return (
    <Box style={{
      position: 'absolute', top, left, right, bottom,
      width: size, height: size, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,200,120,0.95) 0%, rgba(255,103,206,0.38) 32%, rgba(164,95,255,0.18) 52%, rgba(255,132,214,0) 72%)',
      filter: `blur(${blur}px)`, opacity, pointerEvents: 'none',
    }} />
  );
}

function DecorativeChip({ side = 'left', top = '78%', size = 220 }) {
  return (
    <Box visibleFrom="md" style={{
      position: 'absolute', [side]: '-110px', top,
      width: size, height: size, borderRadius: '50%',
      background: 'radial-gradient(circle at 35% 35%, rgba(255,225,186,0.95), rgba(177,91,255,0.95) 40%, rgba(80,20,120,1) 65%, rgba(30,6,48,1) 100%)',
      boxShadow: '0 0 90px rgba(210,90,255,0.35)', transform: 'rotate(-24deg)',
      opacity: 0.78, pointerEvents: 'none',
    }}>
      <Box style={{ position: 'absolute', inset: 22, borderRadius: '50%', border: '14px solid rgba(255,210,170,0.4)' }} />
    </Box>
  );
}

// ─── Promo tile (horizontal banner) ───────────────────────────────────────

function PromoTile({ image, title, accent, href }) {
  const [hovered, setHovered] = useState(false);
  const accentHex = accent === 'yellow' ? '#f59e0b' : accent === 'pink' ? '#e8357a' : '#a855f7';
  const glow = accent === 'yellow' ? 'rgba(255,228,87,0.20)' : accent === 'pink' ? 'rgba(255,66,191,0.20)' : 'rgba(154,92,255,0.20)';

  return (
    <Anchor href={href} target="_blank" rel="noopener noreferrer" underline="never" style={{ display: 'block' }}>
      <Paper radius={16} p={0}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          overflow: 'hidden',
          background: hovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
          border: `1px solid ${hovered ? accentHex + '55' : accentHex + '28'}`,
          boxShadow: hovered ? `0 10px 32px ${glow}` : `0 4px 16px ${glow}`,
          cursor: 'pointer',
          transition: 'background 0.15s, border-color 0.15s, box-shadow 0.15s',
        }}
      >
        <AspectRatio ratio={16 / 3} style={{ width: '100%' }}>
          <Image src={image} alt={title} fit="cover"
            style={{ opacity: hovered ? 1 : 0.88, transition: 'opacity 0.15s' }} />
        </AspectRatio>
        <Box p={{ base: 10, xs: 12, sm: 14, md: 18 }}>
          <Flex gap="sm" justify="space-between" align="center" wrap="nowrap">
            <Text fw={900} fz={{ base: 11, xs: 12, sm: 14, md: 17 }} lh={1.2} c="white"
              style={{ letterSpacing: '-0.03em', textTransform: 'uppercase', flex: 1, minWidth: 0, wordBreak: 'break-word' }}>
              {title}
            </Text>
            <Box style={{
              flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '6px 10px', borderRadius: 10,
              background: `${accentHex}20`, border: `1px solid ${accentHex}44`, whiteSpace: 'nowrap',
            }}>
              <Text fz={{ base: 10, sm: 12 }} fw={800} c={accentHex} style={{ textTransform: 'uppercase' }}>GİRİŞ YAP</Text>
              <IconArrowUpRight size={12} color={accentHex} />
            </Box>
          </Flex>
        </Box>
      </Paper>
    </Anchor>
  );
}

// ─── GIF card (square, inside 3-col grid) ─────────────────────────────────

function PromoGifCard({ image, title, accent, href }) {
  const [hovered, setHovered] = useState(false);
  const accentHex = accent === 'yellow' ? '#f59e0b' : accent === 'pink' ? '#e8357a' : '#a855f7';
  const glow = accent === 'yellow' ? 'rgba(255,228,87,0.35)' : accent === 'pink' ? 'rgba(255,66,191,0.35)' : 'rgba(154,92,255,0.35)';

  return (
    <Anchor href={href} target="_blank" rel="noopener noreferrer" underline="never" style={{ display: 'block' }}>
      {/* Outer wrapper keeps 1:1 ratio */}
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '100%', // square
          borderRadius: 14,
          overflow: 'hidden',
          background: '#06000f',
          border: `2px solid ${hovered ? accentHex + '99' : accentHex + '33'}`,
          boxShadow: hovered
            ? `0 0 24px ${glow}, 0 8px 28px rgba(0,0,0,0.55)`
            : `0 4px 16px rgba(0,0,0,0.45)`,
          cursor: 'pointer',
          transition: 'border-color 0.18s, box-shadow 0.18s, transform 0.18s',
          transform: hovered ? 'translateY(-3px) scale(1.025)' : 'none',
        }}
      >
        {/* GIF fills the square */}
        <img
          src={image}
          alt={title}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            display: 'block',
            opacity: hovered ? 1 : 0.9,
            transition: 'opacity 0.18s',
          }}
        />
      </Box>
    </Anchor>
  );
}

// ─── Action button ─────────────────────────────────────────────────────────

function ActionButton({ href }) {
  return (
    <Anchor href={href} target="_blank" rel="noopener noreferrer" underline="never" style={{ flexShrink: 0 }}>
      <Box style={{
        minWidth: 58, width: 'clamp(58px, 16vw, 96px)', height: 'clamp(48px, 13vw, 74px)',
        background: 'linear-gradient(180deg, #f340a8 0%, #d93198 100%)',
        borderRadius: 12, boxShadow: '0 8px 22px rgba(255,73,184,0.28)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 3, cursor: 'pointer', transition: 'opacity 0.15s, transform 0.15s',
      }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'scale(0.97)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <IconArrowUpRight size={18} color="white" strokeWidth={2.4} />
        <Text c="white" fw={900} fz={{ base: 9, sm: 10 }} lh={1}>GİRİŞ YAP</Text>
      </Box>
    </Anchor>
  );
}

// ─── Bonus row ─────────────────────────────────────────────────────────────

function BonusRow({ image, text, badge, telegram, href }) {
  return (
    <Paper radius={20} p={0} style={{
      overflow: 'hidden',
      background: 'linear-gradient(90deg, rgba(69,24,101,0.98) 0%, rgba(83,41,123,0.96) 50%, rgba(93,58,132,0.92) 100%)',
      border: '1px solid rgba(255,255,255,0.05)',
      boxShadow: '0 14px 30px rgba(20,4,36,0.30)',
    }}>
      <Group gap={0} align="stretch" wrap="nowrap">
        <Anchor href={href} target="_blank" rel="noopener noreferrer" underline="never"
          style={{
            position: 'relative',
            background: telegram ? 'transparent' : 'rgba(0,0,0,0.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 8, flexShrink: 0, width: 'clamp(64px, 18vw, 106px)',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          {badge && (
            <>
              <Box style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, borderTop: '28px solid #ff9d17', borderRight: '28px solid transparent', zIndex: 2 }} />
              <ThemeIcon variant="transparent" color="dark" size={12} style={{ position: 'absolute', top: 3, left: 3, zIndex: 3 }}>
                <IconBriefcase size={12} stroke={2.3} />
              </ThemeIcon>
            </>
          )}
          {telegram ? (
            <ThemeIcon size={44} radius={44} color="blue" variant="filled">
              <IconBrandTelegram size={24} />
            </ThemeIcon>
          ) : (
            <AspectRatio ratio={1} style={{ width: '100%', maxWidth: 68 }}>
              <Image src={image} alt="bonus" radius={8} />
            </AspectRatio>
          )}
        </Anchor>

        <Group justify="space-between" align="center" wrap="nowrap"
          style={{ flex: 1, padding: '10px 8px', minWidth: 0 }} gap={8}>
          <Text fw={800} fz={{ base: 10, xs: 11, sm: 13, md: 15 }} lh={1.25} c="white"
            style={{ letterSpacing: '-0.02em', textTransform: 'uppercase', wordBreak: 'break-word', flex: 1, minWidth: 0, paddingRight: 4 }}>
            {text}
          </Text>
          <ActionButton href={href} />
        </Group>
      </Group>
    </Paper>
  );
}

// ─── Signup card ───────────────────────────────────────────────────────────

function SignupCard() {
  const [phone, setPhone] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <Paper radius={24} p={{ base: 'md', sm: 'xl' }} style={{
      position: 'relative', overflow: 'visible',
      background: 'linear-gradient(180deg, rgba(31,16,49,0.98) 0%, rgba(22,11,35,0.98) 100%)',
      border: '1px solid rgba(255,255,255,0.05)',
      boxShadow: '0 18px 40px rgba(20,4,36,0.3)',
    }}>
      <Box style={{ position: 'absolute', left: '50%', top: -32, transform: 'translateX(-50%) rotate(-10deg)', zIndex: 4 }}>
        <ThemeIcon size={64} radius={64} color="orange" variant="gradient" gradient={{ from: 'yellow', to: 'orange' }}
          style={{ boxShadow: '0 14px 28px rgba(255,166,0,0.3)' }}>
          <IconGift size={32} />
        </ThemeIcon>
      </Box>

      <Stack gap={14} mt={30}>
        <Stack gap={6} align="center">
          <Text ta="center" fw={900} fz={{ base: 14, xs: 16, sm: 22, md: 26 }} lh={1.1} c="white"
            style={{ letterSpacing: '-0.04em' }}>
            <Text span c="orange.4" inherit>Sadece</Text>{' '}size özel en iyi bonusları ilk gören siz olmak ister misiniz?
          </Text>
          <Text ta="center" fw={800} fz={{ base: 12, xs: 14, sm: 17, md: 20 }} lh={1.15} c="white"
            style={{ letterSpacing: '-0.03em' }}>
            <Text span c="orange.4" inherit>Telefon</Text>{' '}numaranızı girin ve bonusuzu şimdi etkinleştirin!
          </Text>
        </Stack>

        <Stack gap={10}>
          <Box style={{ position: 'relative' }}>
            <Box style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'rgba(80,40,120,0.6)', zIndex: 2, display: 'flex' }}>
              <IconPhone size={18} />
            </Box>
            <input value={phone} onChange={(e) => setPhone(e.target.value)}
              placeholder="Cep telefonu numaranız" type="tel"
              onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
              style={{
                width: '100%', height: 50, boxSizing: 'border-box',
                background: 'rgba(255,255,255,0.96)',
                border: `1.5px solid ${focused ? '#e8357a88' : 'transparent'}`,
                borderRadius: 14, color: '#1a0030', fontSize: 14, fontWeight: 700,
                paddingLeft: 44, paddingRight: 16, outline: 'none', fontFamily: 'inherit',
                transition: 'border-color 0.15s',
              }}
            />
          </Box>

          <Anchor href={`${SITE_URL}/register`} target="_blank" rel="noopener noreferrer" underline="never">
            <Box style={{
              width: '100%', height: 50,
              background: 'linear-gradient(180deg, #f340a8 0%, #d93198 100%)',
              borderRadius: 14, color: 'white', fontSize: 15, fontWeight: 900,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              boxShadow: '0 10px 28px rgba(255,73,184,0.30)', cursor: 'pointer', transition: 'opacity 0.15s',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Bonusu Etkinleştir <IconArrowUpRight size={18} />
            </Box>
          </Anchor>
        </Stack>
      </Stack>
    </Paper>
  );
}

// ─── Sticky footer ─────────────────────────────────────────────────────────

function FooterTelegram() {
  return (
    <Paper radius={0} px={{ base: 12, sm: 20 }} py={{ base: 11, sm: 16 }} style={{
      background: 'rgba(14,6,24,0.98)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      position: 'sticky', bottom: 0, zIndex: 20,
    }}>
      <Container size="lg" px={0}>
        <Group justify="space-between" align="center" wrap="nowrap" gap="sm">
          <Text fw={900} fz={{ base: 12, xs: 14, sm: 18 }} c="white" lh={1.2}
            style={{ letterSpacing: '-0.04em', textTransform: 'uppercase', flex: 1 }}>
            ⚡ Telegram ⚡<br />Hediyeler İçin Bana Katıl ⚡
          </Text>
          <Anchor href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" underline="never" style={{ flexShrink: 0 }}>
            <Box style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              width: 'clamp(44px, 13vw, 116px)', height: 'clamp(40px, 11vw, 56px)',
              background: 'linear-gradient(135deg, #2fb5ff 0%, #0e87d0 100%)',
              borderRadius: 12, cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(14,135,208,0.32)', transition: 'opacity 0.15s',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <IconBrandTelegram size={22} color="white" />
              <Text fw={800} fz={13} c="white" visibleFrom="xs">Katıl</Text>
            </Box>
          </Anchor>
        </Group>
      </Container>
    </Paper>
  );
}

// ─── App root ──────────────────────────────────────────────────────────────

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={{
      primaryColor: 'pink', defaultRadius: 'md',
      fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif',
      breakpoints: { xs: '30em', sm: '48em', md: '64em', lg: '74em', xl: '90em' },
    }}>
      <Notifications />
      <AppShell padding={0}>
        <AppShell.Main>
          <Box style={{
            minHeight: '100vh', position: 'relative', overflow: 'hidden',
            background: 'radial-gradient(circle at 50% 18%, rgba(146,61,255,0.22), transparent 22%), linear-gradient(180deg, #07010d 0%, #170320 22%, #391053 58%, #682078 82%, #1a0c2d 100%)',
          }}>
            <Box visibleFrom="xs">
              <GlowOrb size={100} top={100} left={10} opacity={0.28} />
              <GlowOrb size={90} top={320} left={20} opacity={0.22} />
              <GlowOrb size={100} top={180} right={20} opacity={0.20} />
              <GlowOrb size={110} bottom={200} right={10} opacity={0.28} />
              <GlowOrb size={90} bottom={70} left={10} opacity={0.18} />
            </Box>
            <DecorativeChip side="left" top="72%" size={210} />
            <DecorativeChip side="right" top="38%" size={210} />
            <DecorativeChip side="right" top="88%" size={200} />

            <Container size="sm" py={{ base: 14, sm: 30, md: 52 }} px={{ base: 8, xs: 12, sm: 18, md: 24 }}
              style={{ position: 'relative', zIndex: 2 }}>
              <Stack gap={{ base: 12, sm: 18, md: 26 }}>

                {/* Header */}
                <Stack gap={8} align="center" pt={{ base: 10, sm: 8 }}>
                  <Anchor href={SITE_URL} target="_blank" rel="noopener noreferrer" underline="never">
                    <Image src="https://placehold.co/180x60/000000/ffffff?text=ASGARD" alt="Asgard"
                      w={{ base: 68, xs: 80, sm: 100, md: 120 }} fit="contain" style={{ cursor: 'pointer' }} />
                  </Anchor>
                  <Title order={1} ta="center" fz={{ base: 24, xs: 32, sm: 44, md: 54 }} lh={0.98} c="white"
                    style={{ letterSpacing: '-0.06em', textTransform: 'uppercase' }}>
                    Slot Oyunları<br />Asgard
                  </Title>
                  <Text ta="center" c="white" fw={800} fz={{ base: 12, xs: 14, sm: 18 }}
                    style={{ textTransform: 'uppercase', letterSpacing: '-0.03em' }}>
                    Kayıt ol bonusları kap
                  </Text>
                  <Anchor href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" underline="never">
                    <ThemeIcon size={46} radius={14} variant="light" color="violet"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)', marginTop: 4, cursor: 'pointer', transition: 'opacity 0.15s' }}>
                      <IconBrandTelegram size={22} />
                    </ThemeIcon>
                  </Anchor>
                </Stack>

                {/* Hero banner rows */}
                <Paper radius={20} p={{ base: 8, xs: 10, sm: 14 }} style={{
                  background: 'rgba(35,6,54,0.82)', border: '1px solid rgba(255,255,255,0.03)',
                  boxShadow: '0 20px 50px rgba(10,0,20,0.36)',
                }}>
                  <Stack gap={{ base: 6, sm: 10 }}>
                    {heroCards.map((card) => <PromoTile key={card.title} {...card} />)}
                  </Stack>
                </Paper>

                {/* GIF grid — 3 columns, square cards */}
                <Paper radius={20} p={{ base: 8, xs: 10, sm: 14 }} style={{
                  background: 'rgba(35,6,54,0.82)', border: '1px solid rgba(255,255,255,0.03)',
                  boxShadow: '0 20px 50px rgba(10,0,20,0.36)',
                }}>
                  <SimpleGrid cols={3} spacing={{ base: 6, sm: 10 }}>
                    {heroGifs.map((card) => <PromoGifCard key={card.title} {...card} />)}
                  </SimpleGrid>
                </Paper>

                {/* Bonus rows */}
                <Stack gap={{ base: 8, sm: 12 }}>
                  {bonusItems.map((item, i) => <BonusRow key={i} {...item} />)}
                </Stack>

                {/* Signup */}
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

// import React, { useState } from 'react';
// import {
//   MantineProvider,
//   AppShell,
//   Box,
//   Container,
//   Group,
//   Image,
//   Paper,
//   Stack,
//   Text,
//   Title,
//   ThemeIcon,
//   AspectRatio,
//   Anchor,
//   Flex,
// } from '@mantine/core';
// import { Notifications } from '@mantine/notifications';
// import {
//   IconArrowUpRight,
//   IconBrandTelegram,
//   IconGift,
//   IconPhone,
//   IconBriefcase,
// } from '@tabler/icons-react';
// import '@mantine/core/styles.css';
// import '@mantine/notifications/styles.css';

// import betbalina from './assets/betbalina.jpeg';
// import hadiwin from './assets/hadiwin.jpeg';

// import gif1 from './assets/gif1.gif';
// import gif2 from './assets/gif2.gif';
// import gif3 from './assets/gif3.gif'; 

// const SITE_URL = 'https://your-casino-site.com';
// const TELEGRAM_URL = 'https://t.me/slotac';

// const heroCards = [
//   {
//     title: '1.000 TL YATIR - 250 TL AL!',
//     accent: 'pink',
//     image: betbalina,
//     href: 'https://www.betbalina134.com/tr/casino/slots',
//   },
//   {
//     title: '100 FREE SPIN AL!',
//     accent: 'yellow',
//     image: hadiwin,
//     href: 'http://hadiwin.direct/#/?btag=2710669',
//   },
//   {
//     title: '100 FREE SPIN AL!',
//     accent: 'violet',
//     image: betbalina,
//     href: 'https://www.betbalina134.com/tr/casino/slots',
//   },
// ];
// const heroGifs = [
//   {
//     title: '1.000 TL YATIR - 250 TL AL!',
//     accent: 'pink',
//     image: gif1,
//     href: 'https://www.betbalina134.com/tr/casino/slots',
//   },
//   {
//     title: '100 FREE SPIN AL!',
//     accent: 'yellow',
//     image: gif2,
//     href: 'http://hadiwin.direct/#/?btag=2710669',
//   },
//   {
//     title: '100 FREE SPIN AL!',
//     accent: 'violet',
//     image: gif3,
//     href: 'https://www.betbalina134.com/tr/casino/slots',
//   },
// ];

// const bonusItems = [
//   {
//     image: hadiwin,
//     text: '1.000 TL yatır canlı desteğe bağlan ve 250 TL al! Havale ile minimum 500 TL yatır',
//     badge: true,
//     href: 'http://hadiwin.direct/#/?btag=2710669',
//   },
//   {
//     image: betbalina,
//     text: 'MRBAHIS500FS KODU İLE CANLI DESTEĞE BAĞLANIP 100 FREE SPİN AL! MEGACÜZDAN İLE MİNİMUM 25 TL YATIR',
//     href: 'https://www.betbalina134.com/tr/casino/slots',
//   },
//   {
//     image: hadiwin,
//     text: "SWEET BONANZA'DA 100 FREE SPİN HEMEN AL VE KAZANMAYA BAŞLA : TRBON100B ECOPAYZ İLE MİNİMUM 100 TL YATIR",
//     href: 'http://hadiwin.direct/#/?btag=2710669',
//   },
//   {
//     image: null,
//     text: '⚡ GÜNCEL OLARAK ETKİNLİKLERİN BİLDİRİMİ İÇİN TIKLA ⚡',
//     telegram: true,
//     href: TELEGRAM_URL,
//   },
// ];

// // ─── Background decorations ────────────────────────────────────────────────

// function GlowOrb({ size, top, left, right, bottom, opacity = 0.35, blur = 14 }) {
//   return (
//     <Box
//       style={{
//         position: 'absolute', top, left, right, bottom,
//         width: size, height: size, borderRadius: '50%',
//         background: 'radial-gradient(circle, rgba(255,200,120,0.95) 0%, rgba(255,103,206,0.38) 32%, rgba(164,95,255,0.18) 52%, rgba(255,132,214,0) 72%)',
//         filter: `blur(${blur}px)`, opacity, pointerEvents: 'none',
//       }}
//     />
//   );
// }

// function DecorativeChip({ side = 'left', top = '78%', size = 220 }) {
//   return (
//     <Box
//       visibleFrom="md"
//       style={{
//         position: 'absolute', [side]: '-110px', top,
//         width: size, height: size, borderRadius: '50%',
//         background: 'radial-gradient(circle at 35% 35%, rgba(255,225,186,0.95), rgba(177,91,255,0.95) 40%, rgba(80,20,120,1) 65%, rgba(30,6,48,1) 100%)',
//         boxShadow: '0 0 90px rgba(210,90,255,0.35)', transform: 'rotate(-24deg)',
//         opacity: 0.78, pointerEvents: 'none',
//       }}
//     >
//       <Box style={{ position: 'absolute', inset: 22, borderRadius: '50%', border: '14px solid rgba(255,210,170,0.4)' }} />
//     </Box>
//   );
// }

// // ─── Promo tile ────────────────────────────────────────────────────────────

// function PromoTile({ image, title, accent, href }) {
//   const [hovered, setHovered] = useState(false);

//   const accentHex = accent === 'yellow' ? '#f59e0b' : accent === 'pink' ? '#e8357a' : '#a855f7';
//   const glow = accent === 'yellow' ? 'rgba(255,228,87,0.20)' : accent === 'pink' ? 'rgba(255,66,191,0.20)' : 'rgba(154,92,255,0.20)';

//   return (
//     <Anchor href={href} target="_blank" rel="noopener noreferrer" underline="never" style={{ display: 'block' }}>
//       <Paper
//         radius={16}
//         p={0}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         style={{
//           overflow: 'hidden',
//           background: hovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
//           border: `1px solid ${hovered ? accentHex + '55' : accentHex + '28'}`,
//           boxShadow: hovered ? `0 10px 32px ${glow}` : `0 4px 16px ${glow}`,
//           cursor: 'pointer',
//           transition: 'background 0.15s, border-color 0.15s, box-shadow 0.15s',
//         }}
//       >
//         <AspectRatio ratio={16 / 3} style={{ width: '100%' }}>
//           <Image
//             src={image}
//             alt={title}
//             fit="cover"
//             style={{ opacity: hovered ? 1 : 0.88, transition: 'opacity 0.15s' }}
//           />
//         </AspectRatio>

//         <Box p={{ base: 10, xs: 12, sm: 14, md: 18 }}>
//           <Flex gap="sm" justify="space-between" align="center" direction="row" wrap="nowrap">
//             <Text
//               fw={900}
//               fz={{ base: 11, xs: 12, sm: 14, md: 17 }}
//               lh={1.2}
//               c="white"
//               style={{
//                 letterSpacing: '-0.03em',
//                 textTransform: 'uppercase',
//                 flex: 1,
//                 minWidth: 0,
//                 wordBreak: 'break-word',
//               }}
//             >
//               {title}
//             </Text>

//             <Box
//               style={{
//                 flexShrink: 0,
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: 4,
//                 padding: '6px 10px',
//                 borderRadius: 10,
//                 background: `${accentHex}20`,
//                 border: `1px solid ${accentHex}44`,
//                 whiteSpace: 'nowrap',
//               }}
//             >
//               <Text fz={{ base: 10, sm: 12 }} fw={800} c={accentHex} style={{ textTransform: 'uppercase' }}>
//                 GİRİŞ YAP
//               </Text>
//               <IconArrowUpRight size={12} color={accentHex} />
//             </Box>
//           </Flex>
//         </Box>
//       </Paper>
//     </Anchor>
//   );
// }
// function PromoGifs({ image, title, accent, href }) {
//   const [hovered, setHovered] = useState(false);

//   const accentHex = accent === 'yellow' ? '#f59e0b' : accent === 'pink' ? '#e8357a' : '#a855f7';
//   const glow = accent === 'yellow' ? 'rgba(255,228,87,0.20)' : accent === 'pink' ? 'rgba(255,66,191,0.20)' : 'rgba(154,92,255,0.20)';

//   return (
//     <Anchor href={href} target="_blank" rel="noopener noreferrer" underline="never" style={{ display: 'block' }}>
//       <Paper
//         radius={16}
//         p={0}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         style={{
//           overflow: 'hidden',
//           background: hovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
//           border: `1px solid ${hovered ? accentHex + '55' : accentHex + '28'}`,
//           boxShadow: hovered ? `0 10px 32px ${glow}` : `0 4px 16px ${glow}`,
//           cursor: 'pointer',
//           transition: 'background 0.15s, border-color 0.15s, box-shadow 0.15s',
//         }}
//       >
//         <AspectRatio ratio={16 / 3} style={{ width: '100%' }}>
//           <Image
//             src={image}
//             alt={title}
//             fit="cover"
//             style={{ opacity: hovered ? 1 : 0.88, transition: 'opacity 0.15s' }}
//           />
//         </AspectRatio>

//         <Box p={{ base: 10, xs: 12, sm: 14, md: 18 }}>
//           <Flex gap="sm" justify="space-between" align="center" direction="row" wrap="nowrap">
//             <Text
//               fw={900}
//               fz={{ base: 11, xs: 12, sm: 14, md: 17 }}
//               lh={1.2}
//               c="white"
//               style={{
//                 letterSpacing: '-0.03em',
//                 textTransform: 'uppercase',
//                 flex: 1,
//                 minWidth: 0,
//                 wordBreak: 'break-word',
//               }}
//             >
//               {title}
//             </Text>

//             <Box
//               style={{
//                 flexShrink: 0,
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: 4,
//                 padding: '6px 10px',
//                 borderRadius: 10,
//                 background: `${accentHex}20`,
//                 border: `1px solid ${accentHex}44`,
//                 whiteSpace: 'nowrap',
//               }}
//             >
//               <Text fz={{ base: 10, sm: 12 }} fw={800} c={accentHex} style={{ textTransform: 'uppercase' }}>
//                 GİRİŞ YAP
//               </Text>
//               <IconArrowUpRight size={12} color={accentHex} />
//             </Box>
//           </Flex>
//         </Box>
//       </Paper>
//     </Anchor>
//   );
// }

// // ─── Action button ─────────────────────────────────────────────────────────

// function ActionButton({ href }) {
//   return (
//     <Anchor href={href} target="_blank" rel="noopener noreferrer" underline="never" style={{ flexShrink: 0 }}>
//       <Box
//         style={{
//           minWidth: 58,
//           width: 'clamp(58px, 16vw, 96px)',
//           height: 'clamp(48px, 13vw, 74px)',
//           background: 'linear-gradient(180deg, #f340a8 0%, #d93198 100%)',
//           borderRadius: 12,
//           boxShadow: '0 8px 22px rgba(255,73,184,0.28)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           gap: 3,
//           cursor: 'pointer',
//           transition: 'opacity 0.15s, transform 0.15s',
//         }}
//         onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'scale(0.97)'; }}
//         onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
//       >
//         <IconArrowUpRight size={18} color="white" strokeWidth={2.4} />
//         <Text c="white" fw={900} fz={{ base: 9, sm: 10 }} lh={1}>GİRİŞ YAP</Text>
//       </Box>
//     </Anchor>
//   );
// }

// // ─── Bonus row ─────────────────────────────────────────────────────────────

// function BonusRow({ image, text, badge, telegram, href }) {
//   return (
//     <Paper
//       radius={20}
//       p={0}
//       style={{
//         overflow: 'hidden',
//         background: 'linear-gradient(90deg, rgba(69,24,101,0.98) 0%, rgba(83,41,123,0.96) 50%, rgba(93,58,132,0.92) 100%)',
//         border: '1px solid rgba(255,255,255,0.05)',
//         boxShadow: '0 14px 30px rgba(20,4,36,0.30)',
//       }}
//     >
//       <Group gap={0} align="stretch" wrap="nowrap">
//         {/* Thumbnail */}
//         <Anchor
//           href={href}
//           target="_blank"
//           rel="noopener noreferrer"
//           underline="never"
//           style={{
//             position: 'relative',
//             background: telegram ? 'transparent' : 'rgba(0,0,0,0.22)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             padding: 8,
//             flexShrink: 0,
//             width: 'clamp(64px, 18vw, 106px)',
//             transition: 'opacity 0.15s',
//           }}
//           onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
//           onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
//         >
//           {badge && (
//             <>
//               <Box style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, borderTop: '28px solid #ff9d17', borderRight: '28px solid transparent', zIndex: 2 }} />
//               <ThemeIcon variant="transparent" color="dark" size={12} style={{ position: 'absolute', top: 3, left: 3, zIndex: 3 }}>
//                 <IconBriefcase size={12} stroke={2.3} />
//               </ThemeIcon>
//             </>
//           )}
//           {telegram ? (
//             <ThemeIcon size={44} radius={44} color="blue" variant="filled">
//               <IconBrandTelegram size={24} />
//             </ThemeIcon>
//           ) : (
//             <AspectRatio ratio={1} style={{ width: '100%', maxWidth: 68 }}>
//               <Image src={image} alt="bonus" radius={8} />
//             </AspectRatio>
//           )}
//         </Anchor>

//         {/* Text + CTA */}
//         <Group
//           justify="space-between"
//           align="center"
//           wrap="nowrap"
//           style={{ flex: 1, padding: '10px 8px', minWidth: 0 }}
//           gap={8}
//         >
//           <Text
//             fw={800}
//             fz={{ base: 10, xs: 11, sm: 13, md: 15 }}
//             lh={1.25}
//             c="white"
//             style={{
//               letterSpacing: '-0.02em',
//               textTransform: 'uppercase',
//               wordBreak: 'break-word',
//               flex: 1,
//               minWidth: 0,
//               paddingRight: 4,
//             }}
//           >
//             {text}
//           </Text>
//           <ActionButton href={href} />
//         </Group>
//       </Group>
//     </Paper>
//   );
// }

// // ─── Signup card ───────────────────────────────────────────────────────────

// function SignupCard() {
//   const [phone, setPhone] = useState('');
//   const [focused, setFocused] = useState(false);

//   return (
//     <Paper
//       radius={24}
//       p={{ base: 'md', sm: 'xl' }}
//       style={{
//         position: 'relative',
//         overflow: 'visible',
//         background: 'linear-gradient(180deg, rgba(31,16,49,0.98) 0%, rgba(22,11,35,0.98) 100%)',
//         border: '1px solid rgba(255,255,255,0.05)',
//         boxShadow: '0 18px 40px rgba(20,4,36,0.3)',
//       }}
//     >
//       <Box style={{ position: 'absolute', left: '50%', top: -32, transform: 'translateX(-50%) rotate(-10deg)', zIndex: 4 }}>
//         <ThemeIcon
//           size={64}
//           radius={64}
//           color="orange"
//           variant="gradient"
//           gradient={{ from: 'yellow', to: 'orange' }}
//           style={{ boxShadow: '0 14px 28px rgba(255,166,0,0.3)' }}
//         >
//           <IconGift size={32} />
//         </ThemeIcon>
//       </Box>

//       <Stack gap={14} mt={30}>
//         <Stack gap={6} align="center">
//           <Text
//             ta="center"
//             fw={900}
//             fz={{ base: 14, xs: 16, sm: 22, md: 26 }}
//             lh={1.1}
//             c="white"
//             style={{ letterSpacing: '-0.04em' }}
//           >
//             <Text span c="orange.4" inherit>Sadece</Text>{' '}size özel en iyi bonusları ilk gören siz olmak ister misiniz?
//           </Text>
//           <Text
//             ta="center"
//             fw={800}
//             fz={{ base: 12, xs: 14, sm: 17, md: 20 }}
//             lh={1.15}
//             c="white"
//             style={{ letterSpacing: '-0.03em' }}
//           >
//             <Text span c="orange.4" inherit>Telefon</Text>{' '}numaranızı girin ve bonusuzu şimdi etkinleştirin!
//           </Text>
//         </Stack>

//         <Stack gap={10}>
//           <Box style={{ position: 'relative' }}>
//             <Box style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'rgba(80,40,120,0.6)', zIndex: 2, display: 'flex' }}>
//               <IconPhone size={18} />
//             </Box>
//             <input
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="Cep telefonu numaranız"
//               type="tel"
//               onFocus={() => setFocused(true)}
//               onBlur={() => setFocused(false)}
//               style={{
//                 width: '100%',
//                 height: 50,
//                 boxSizing: 'border-box',
//                 background: 'rgba(255,255,255,0.96)',
//                 border: `1.5px solid ${focused ? '#e8357a88' : 'transparent'}`,
//                 borderRadius: 14,
//                 color: '#1a0030',
//                 fontSize: 14,
//                 fontWeight: 700,
//                 paddingLeft: 44,
//                 paddingRight: 16,
//                 outline: 'none',
//                 fontFamily: 'inherit',
//                 transition: 'border-color 0.15s',
//               }}
//             />
//           </Box>

//           <Anchor href={`${SITE_URL}/register`} target="_blank" rel="noopener noreferrer" underline="never">
//             <Box
//               style={{
//                 width: '100%',
//                 height: 50,
//                 background: 'linear-gradient(180deg, #f340a8 0%, #d93198 100%)',
//                 borderRadius: 14,
//                 color: 'white',
//                 fontSize: 15,
//                 fontWeight: 900,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 gap: 8,
//                 boxShadow: '0 10px 28px rgba(255,73,184,0.30)',
//                 cursor: 'pointer',
//                 transition: 'opacity 0.15s',
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
//               onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
//             >
//               Bonusu Etkinleştir <IconArrowUpRight size={18} />
//             </Box>
//           </Anchor>
//         </Stack>
//       </Stack>
//     </Paper>
//   );
// }

// // ─── Sticky footer ─────────────────────────────────────────────────────────

// function FooterTelegram() {
//   return (
//     <Paper
//       radius={0}
//       px={{ base: 12, sm: 20 }}
//       py={{ base: 11, sm: 16 }}
//       style={{
//         background: 'rgba(14,6,24,0.98)',
//         borderTop: '1px solid rgba(255,255,255,0.05)',
//         position: 'sticky',
//         bottom: 0,
//         zIndex: 20,
//       }}
//     >
//       <Container size="lg" px={0}>
//         <Group justify="space-between" align="center" wrap="nowrap" gap="sm">
//           <Text
//             fw={900}
//             fz={{ base: 12, xs: 14, sm: 18 }}
//             c="white"
//             lh={1.2}
//             style={{ letterSpacing: '-0.04em', textTransform: 'uppercase', flex: 1 }}
//           >
//             ⚡ Telegram ⚡<br />
//             Hediyeler İçin Bana Katıl ⚡
//           </Text>
//           <Anchor href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" underline="never" style={{ flexShrink: 0 }}>
//             <Box
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 gap: 8,
//                 width: 'clamp(44px, 13vw, 116px)',
//                 height: 'clamp(40px, 11vw, 56px)',
//                 background: 'linear-gradient(135deg, #2fb5ff 0%, #0e87d0 100%)',
//                 borderRadius: 12,
//                 cursor: 'pointer',
//                 boxShadow: '0 6px 20px rgba(14,135,208,0.32)',
//                 transition: 'opacity 0.15s',
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
//               onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
//             >
//               <IconBrandTelegram size={22} color="white" />
//               <Text fw={800} fz={13} c="white" visibleFrom="xs">Katıl</Text>
//             </Box>
//           </Anchor>
//         </Group>
//       </Container>
//     </Paper>
//   );
// }

// // ─── App root ──────────────────────────────────────────────────────────────

// export default function App() {
//   return (
//     <MantineProvider
//       defaultColorScheme="dark"
//       theme={{
//         primaryColor: 'pink',
//         defaultRadius: 'md',
//         fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif',
//         breakpoints: {
//           xs: '30em',   // 480px
//           sm: '48em',   // 768px
//           md: '64em',   // 1024px
//           lg: '74em',
//           xl: '90em',
//         },
//       }}
//     >
//       <Notifications />
//       <AppShell padding={0}>
//         <AppShell.Main>
//           <Box
//             style={{
//               minHeight: '100vh',
//               position: 'relative',
//               overflow: 'hidden',
//               background:
//                 'radial-gradient(circle at 50% 18%, rgba(146,61,255,0.22), transparent 22%), linear-gradient(180deg, #07010d 0%, #170320 22%, #391053 58%, #682078 82%, #1a0c2d 100%)',
//             }}
//           >
//             {/* Glows hidden on smallest screens for perf */}
//             <Box visibleFrom="xs">
//               <GlowOrb size={100} top={100} left={10} opacity={0.28} />
//               <GlowOrb size={90} top={320} left={20} opacity={0.22} />
//               <GlowOrb size={100} top={180} right={20} opacity={0.20} />
//               <GlowOrb size={110} bottom={200} right={10} opacity={0.28} />
//               <GlowOrb size={90} bottom={70} left={10} opacity={0.18} />
//             </Box>

//             <DecorativeChip side="left" top="72%" size={210} />
//             <DecorativeChip side="right" top="38%" size={210} />
//             <DecorativeChip side="right" top="88%" size={200} />

//             <Container
//               size="sm"
//               py={{ base: 14, sm: 30, md: 52 }}
//               px={{ base: 8, xs: 12, sm: 18, md: 24 }}
//               style={{ position: 'relative', zIndex: 2 }}
//             >
//               <Stack gap={{ base: 12, sm: 18, md: 26 }}>

//                 {/* Header */}
//                 <Stack gap={8} align="center" pt={{ base: 10, sm: 8 }}>
//                   <Anchor href={SITE_URL} target="_blank" rel="noopener noreferrer" underline="never">
//                     <Image
//                       src="https://placehold.co/180x60/000000/ffffff?text=ASGARD"
//                       alt="Asgard"
//                       w={{ base: 68, xs: 80, sm: 100, md: 120 }}
//                       fit="contain"
//                       style={{ cursor: 'pointer' }}
//                     />
//                   </Anchor>

//                   <Title
//                     order={1}
//                     ta="center"
//                     fz={{ base: 24, xs: 32, sm: 44, md: 54 }}
//                     lh={0.98}
//                     c="white"
//                     style={{ letterSpacing: '-0.06em', textTransform: 'uppercase' }}
//                   >
//                     Slot Oyunları<br />Asgard
//                   </Title>

//                   <Text
//                     ta="center"
//                     c="white"
//                     fw={800}
//                     fz={{ base: 12, xs: 14, sm: 18 }}
//                     style={{ textTransform: 'uppercase', letterSpacing: '-0.03em' }}
//                   >
//                     Kayıt ol bonusları kap
//                   </Text>

//                   <Anchor href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" underline="never">
//                     <ThemeIcon
//                       size={46}
//                       radius={14}
//                       variant="light"
//                       color="violet"
//                       style={{
//                         background: 'rgba(255,255,255,0.06)',
//                         border: '1px solid rgba(255,255,255,0.09)',
//                         marginTop: 4,
//                         cursor: 'pointer',
//                         transition: 'opacity 0.15s',
//                       }}
//                     >
//                       <IconBrandTelegram size={22} />
//                     </ThemeIcon>
//                   </Anchor>
//                 </Stack>

//                 {/* Hero promo cards */}
//                 <Paper
//                   radius={20}
//                   p={{ base: 8, xs: 10, sm: 14 }}
//                   style={{
//                     background: 'rgba(35,6,54,0.82)',
//                     border: '1px solid rgba(255,255,255,0.03)',
//                     boxShadow: '0 20px 50px rgba(10,0,20,0.36)',
//                   }}
//                 >
//                   <Stack gap={{ base: 6, sm: 10 }}>
//                     {heroCards.map((card) => (
//                       <PromoTile key={card.title} {...card} />
//                     ))}
//                   </Stack>
//                 </Paper>
//                 {/* Hero promo cards */}
//                 <Paper
//                   radius={20}
//                   p={{ base: 8, xs: 10, sm: 14 }}
//                   style={{
//                     background: 'rgba(35,6,54,0.82)',
//                     border: '1px solid rgba(255,255,255,0.03)',
//                     boxShadow: '0 20px 50px rgba(10,0,20,0.36)',
//                   }}
//                 >
//                   <Stack gap={{ base: 6, sm: 10 }}>
//                     {heroGifs.map((card) => (
//                       <PromoGifs key={card.title} {...card} />
//                     ))}
//                   </Stack>
//                 </Paper>

//                 {/* Bonus rows */}
//                 <Stack gap={{ base: 8, sm: 12 }}>
//                   {bonusItems.map((item, index) => (
//                     <BonusRow key={index} {...item} />
//                   ))}
//                 </Stack>

//                 {/* Signup */}
//                 <SignupCard />

//               </Stack>
//             </Container>

//             <FooterTelegram />
//           </Box>
//         </AppShell.Main>
//       </AppShell>
//     </MantineProvider>
//   );
// }