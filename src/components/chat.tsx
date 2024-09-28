import { Box, VStack } from "@chakra-ui/react"
import MessageStream from "./message-stream"
import MessageBox from "./message-box"

export default () => {
    return (
        <VStack
            h={"80vh"}
            w="100%"
            borderRadius="lg"
            borderWidth={"1px"}
            justifyContent={'flex-end'}
        >

            <MessageStream messages={[{ message: 'kawall', bot: true }, { message: "smieszne" }]} />
            <MessageBox />
        </VStack>
    )
}