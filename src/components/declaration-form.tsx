import { Text, VStack } from "@chakra-ui/react"
import Form from "@rjsf/chakra-ui";
import { RJSFSchema } from "@rjsf/utils";
import validator from '@rjsf/validator-ajv8';

const schema: RJSFSchema = {
  "title": "A registration form",
  "description": "A simple form example.",
  "type": "object",
  "required": [
    "firstName",
    "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First name",
      "default": "Chuck",
      "description": "Asdwadwadwa"
    },
    "lastName": {
      "type": "string",
      "title": "Last name"
    },
    "age": {
      "type": "integer",
      "title": "Age"
    },
    "bio": {
      "type": "string",
      "title": "Bio"
    },
    "password": {
      "type": "string",
      "title": "Password",
      "minLength": 3
    },
    "telephone": {
      "type": "string",
      "title": "Telephone",
      "minLength": 10
    }
  }
}

export default () => {
      
    return (
    <VStack
        h={"80vh"}
        w="100%"
        borderRadius="lg"
        borderWidth={"1px"}
        alignItems='flex-start'
        p={2}
    >
        <Form schema={schema} validator={validator} children={true} />
    </VStack>
    )
}