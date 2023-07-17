import React from 'react';
import {
  Box, Heading, Image, Container, Stack, Text,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

function Home() {
  return (
    <Box>
      <MyCarousel />
      <Container minH="100vh" maxW="container.xl" p="16">
        <Heading textTransform="uppercase" py="2" m="auto" w="fit-content" borderBottom="2px solid">Services</Heading>
        <Stack
          h="full"
          p="4"
          alignItems="center"
          direction={['column', 'row']}
        >
          <Image
            src={img5}
            filter="hue-rotate(-130deg)"
            h={['40', '400']}
          />
          <Text letterSpacing="widest" lineHeight="190%" p={['4', '16']} textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

function MyCarousel() {
  const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
  };

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={2000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w="full" h="100vh">
        <Image src={img1} />
        <Heading
          bgColor="blackAlpha.600"
          color="white"
          {...headingOptions}
        >
          Watch the future
        </Heading>
      </Box>

      <Box w="full" h="100vh">
        <Image src={img2} />
        <Heading
          bgColor="whiteAlpha.900"
          color="black"
          {...headingOptions}
        >
          Future is Gaming
        </Heading>
      </Box>

      <Box w="full" h="100vh">
        <Image src={img3} />
        <Heading
          bgColor="whiteAlpha.600"
          color="black"
          {...headingOptions}
        >
          Gaming On Console
        </Heading>
      </Box>

      <Box w="full" h="100vh">
        <Image src={img4} />
        <Heading
          bgColor="whiteAlpha.800"
          color="black"
          {...headingOptions}
        >
          Coding Life is Cool
        </Heading>
      </Box>
    </Carousel>
  );
}

export default Home;
