import { Box, Card, CardHeader, Heading, CardBody, Stack, StackDivider, Text } from "@chakra-ui/react";
import React from "react";

function CertificationCard(props: any) {
    const {title, org, date} = props;
    return (
        <Card variant='' className="hover:bg-slate-900 hover:shadow-xl transition-all mt-8" bg='transparent'>
            <CardHeader>
                <Heading size='md' className="text-slate-300">{title}</Heading>
            </CardHeader>

            <CardBody className="text-slate-400">
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box bg='transparent'>
                        <Heading size='xs' textTransform='uppercase'>
                            {org}
                        </Heading>
                        <em>{date}</em>
                        <Text pt='2' fontSize='sm'>
                            {props.children}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CertificationCard;