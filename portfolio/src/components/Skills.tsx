import React from "react";
import {
    Badge,
    List,
    ListItem,
    Progress
  } from '@chakra-ui/react'

export default function Skills(props: any) {
    const skills = props.skills;
    return (
        <div>
            <h1 className={`pt-5`}>Skills</h1>
        <List spacing={3}>
            {skills.map((skill: any) => {
                return (
                <ListItem>
                    <Badge colorScheme="blue" fontSize="md">
                        {skill.name}
                    </Badge>
                    <Progress hasStripe value={skill.value} colorScheme="twitter"/>
                </ListItem>
                )
            })}
        </List>
        </div>
    );
}