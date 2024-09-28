import { Container, HStack, Text, theme } from "@chakra-ui/react";
import React from "react";
import { Primary, Secondary } from "../base-colors";

interface Props {
    message: string;
    bot?: boolean;
}

export default ({
    message, bot
}: Props) => {
    return (
        <HStack width="100%" justifyContent={bot ? 'flex-start' : 'flex-end'} padding={2}>
        <Container borderRadius={4} bgColor={bot ? Primary : Secondary} w='min-content' m={0}>
            <Text color={bot ? theme.colors.white : theme.colors.black}>{message}</Text>
        </Container>
        </HStack>
    )
}