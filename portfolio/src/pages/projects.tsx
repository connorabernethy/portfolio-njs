import Breadcrumbs from '@/components/Breadcrumbs'
import { Button, ButtonGroup, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Heading } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Stack, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function Projects(props: any) {
    return (
        <main
            className={`flex min-h-screen flex-col justify-start p-24 leaguespartan`}>
            <h1>Projects</h1>
            <div className={`pt-10`}>
                <Tabs isFitted variant='enclosed'>
                    <TabList>
                        <Tab>Pioneer Sand</Tab>
                        <Tab>Honors Thesis</Tab>
                        <Tab>Other</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Card maxW='sm' alignSelf='center' margin='auto' pt={5}>
                                <CardBody>
                                    <Image
                                        src='https://mms.businesswire.com/media/20200715005612/en/805731/23/Pioneer_logo_highres.jpg'
                                        alt='Pioneer Sand'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>Pioneer Sand</Heading>
                                        <Text fontSize="xl">
                                            Delivered Full-stack solutions for an eCommerce website
                                            while working full time with the customer. Developed with TypeScript,
                                            React, & NextJS.
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button variant='solid' colorScheme='blue'>
                                            Visit Pioneer Sand Website
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </TabPanel>
                        <TabPanel>
                        <Card maxW='sm' alignSelf='center' margin='auto' pt={5}>
                                <CardBody>
                                    <Image
                                        src='https://www.twlewis.com/files/cms-philanthropy/asu_barretthonors_horiz_rgb_maroongold_150ppi_(1)_180917id763.png'
                                        alt='Honors Thesis'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>Barrett Honors Thesis</Heading>
                                        <Text fontSize="xl">
                                            Senior Honors Thesis at Arizona State University
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button variant='solid' colorScheme='blue'>
                                            Honors Thesis Link
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </TabPanel>
                        <TabPanel>
                        <Card maxW='sm' alignSelf='center' margin='auto' pt={5}>
                                <CardBody>
                                    <Image
                                        src=''
                                        alt=''
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>Other</Heading>
                                        <Text fontSize="xl">
                                            Will be updated soon.
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button variant='solid' colorScheme='blue'>
                                            Other
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
            <Breadcrumbs one="home" two="about" three="contact"></Breadcrumbs>
        </main>
    )
}