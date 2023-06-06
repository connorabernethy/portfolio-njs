import Breadcrumbs from '@/components/Breadcrumbs'
import { Button, ButtonGroup, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Heading } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Stack, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Projects(props: any) {
    const router = useRouter()

    return (
        <main
            className={`flex min-h-screen flex-col justify-start p-24 leaguespartan`}>
            <h1>Projects</h1>
            <div className={`pt-10`}>
                <Tabs isFitted variant='soft-rounded' colorScheme='blue'>
                    <TabList>
                        <Tab>Pioneer Sand</Tab>
                        <Tab>Honors Thesis</Tab>
                        <Tab>LinkedList Demo</Tab>
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
                                    <Link href='https://pioneerco.com' className='link'>Pioneer Sand Link</Link>
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
                                    <Link href='https://keep.lib.asu.edu/items/185922' className='link'>Honors Thesis Link</Link>
                                </CardFooter>
                            </Card>
                        </TabPanel>
                        <TabPanel>
                        <Card maxW='sm' alignSelf='center' margin='auto' pt={5}>
                                <CardBody>
                                    <Image
                                        src='https://media.geeksforgeeks.org/wp-content/uploads/20220816144425/LLdrawio.png'
                                        alt=''
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>LinkedList Demo</Heading>
                                        <Text fontSize="xl">
                                            An honors project using HTML5, JavaScript and CSS to demonstrate
                                            LinkedList functions in a web application.
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <Link href='http://linked-list-honors-contract.s3-website-us-west-1.amazonaws.com/' className='link'>LinkedList Demo Link</Link>
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