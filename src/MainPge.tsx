import { Button, FormControl, FormLabel, Heading, HStack, Switch, theme, useColorMode, VStack } from "@chakra-ui/react";
import Chat from "./components/chat";
import DeclarationForm from "./components/declaration-form";
import { Primary } from "./base-colors";

export default () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <VStack w="100vw" h='100%' minH='100vh' bg={theme.colors.white[100]}>
            <HStack
                bgColor={Primary}
                w="100%"
                p={4}
                justifyContent='space-between'
                color={theme.colors.white}
            >
                <Heading>Kakaton project</Heading>
                <FormControl display={'flex'} w='max-content'>
                    <FormLabel htmlFor="dark-switch" mb={0}>Dark mode</FormLabel>
                    <Switch id="dark-switch" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
                </FormControl>
            </HStack>
            <HStack w="100%" p={2}>
                <Chat />
                <DeclarationForm />
            </HStack>
        </VStack>
    )
}