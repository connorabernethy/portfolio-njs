import { Box, Card, CardHeader, Heading, CardBody, Stack, StackDivider, Text } from "@chakra-ui/react";
import React from "react";

function ExperienceCard(props: any) {
    const {job, position} = props;
    return (
        <Card variant='outline' className="hover:bg-slate-900 transition-all mt-8" bg='transparent'>
            <CardHeader>
                <Heading size='md' className="text-slate-300">{job}</Heading>
            </CardHeader>

            <CardBody className="text-slate-400">
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box bg='transparent'>
                        <Heading size='xs' textTransform='uppercase'>
                            {position}
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {props.children}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default ExperienceCard;