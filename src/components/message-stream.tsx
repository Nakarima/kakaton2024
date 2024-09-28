import { VStack } from "@chakra-ui/react";
import Bubble from "./bubble";

interface Props {
    messages: { message: string; bot?: boolean; }[]
}

export default ({ messages }: Props) => {
    return (
        <VStack w="100%">
            {messages.map((m, index) => (
                <Bubble {...m} key={`mess-${index}`} />
            ))}
        </VStack>
    )
}