import React from 'react';
import {
  Box, Heading, Stack, VStack, HStack, Button, Input,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

function Footer() {
  return (
    <Box
      bgColor="blackAlpha.900"
      minH="40"
      p="16"
      color="white"
    >
      <Stack direction={['column', 'row']}>
        <VStack
        alignItems={'stretch'}
        w={'full'}
        px={'4'}
        >
          <Heading size="md" textTransform="uppercase" textAlign={["center", "left"]}>
            Subscribe to get updates
          </Heading>
          <HStack
            borderBottom="2px solid white"
            py="2"
          >
            <Input
              placeholder="Enter Email Here..."
              border="none"
              borderRadius="none"
              outline="none"
              focusBorderColor="none"
            />
            <Button
              p="0"
              colorScheme="purple"
              variant="ghost"
              borderRadius="0 20px 20px 0"
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack 
        w={'full'}
        borderLeft={['none', '1px solid white']}
        borderRight={['none', '1px solid white']}
        > 
            <Heading
            textTransform={'uppercase'}
            textAlign={'center'}
            >
                Video Hub
            </Heading>
            <Text>
                All rights reserved
            </Text>
        </VStack>
        <VStack 
        w={'full'}
        > 
            <Heading size={'md'} textTransform={'uppercase'}>
                Social Media
            </Heading>
            <Button variant={'link'} colorScheme={'whiteAlpha'}>
                <a targer="blank" href="https://github.com/NiharPhansalkar">GitHub</a>
            </Button>
            <Button variant={'link'} colorScheme={'whiteAlpha'}>
                <a target="blank" href="https://www.linkedin.com/in/nihar-phansalkar-5a0a75220/">LinkedIn</a>
            </Button>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
