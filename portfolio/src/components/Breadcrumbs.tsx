import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'

export default function Breadcrumbs(props: any) {
    const { one, two, three } = props;
    return (
            <Breadcrumb pt={10} display='flex' alignSelf='center' fontSize='xl'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>{one}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href={'/' + two}>{two}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href={'/' + three}>{three}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
    )
}