import { HStack, Button, Textarea } from "@chakra-ui/react"

export default () => {
    return (
        <HStack w='100%' borderRadius='md' borderWidth={'1px'} gap='0'>
            <Textarea placeholder='Zadaj pytanie' aria-label="Zadaj pytanie" h='auto' minH='1rem' overflow='none' borderWidth={0} borderRadius={0} borderRightWidth={'1px'} />
            <Button
                size='sm'
                h="100%"
                aria-label="Wyslij wiadomosc"
                borderLeftRadius={0}
                colorScheme="teal"
            >
                Wyslij
            </Button>
        </HStack>
    )
}