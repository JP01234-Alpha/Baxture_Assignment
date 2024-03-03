import React, { useEffect, useState } from "react";
import { Card, Text, Badge, Button, Group, Anchor } from "@mantine/core";
import {
  IconTrash,
  IconUser,
  IconUserPlus,
  IconAt,
  IconPhoneCall,
  IconWorld,
  IconStar,
  IconUserMinus,
} from "@tabler/icons-react";
import axios from "axios";

const CardComponent = ({ data, setData }) => {
  const [followedUsers, setFollowedUsers] = useState([]);
  console.log("data", data);

  const handleFollowToggle = (index) => {
    if (followedUsers.includes(index)) {
      setFollowedUsers(followedUsers.filter((item) => item !== index));
    } else {
      setFollowedUsers([...followedUsers, index]);
    }
  };

  const handleDelete = (index) => {
    const newData = data.filter((item, i) => i !== index);
    setData(newData);
  };

  return (
    <section className="cardSectionMain">
      {data?.map((item, index) => {
        const isFollowed = followedUsers.includes(index);
        return (
          <div className="cardSection" key={`card${index}`}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <a className="imageLink">
                <img
                  className="imageSection"
                  width={120}
                  height={120}
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${item?.name}`}
                />
              </a>
              <Text fw={500} align="center">
                {item?.name} {isFollowed && <IconStar size={14} />}
              </Text>

              <Group mt="5" mb="5" gap={2}>
                <IconAt color={"#868e96"} size={14} />
                <Anchor target="_blank">{item?.email}</Anchor>
              </Group>
              <Group mt="5" mb="5" gap={2}>
                <IconPhoneCall color={"#868e96"} size={14} />
                <Anchor target="_blank">{item?.phone}</Anchor>
              </Group>
              <Group mt="5" mb="5" gap={2}>
                <IconWorld color={"#868e96"} size={14} />
                <Anchor target="_blank">{item?.website}</Anchor>
              </Group>
              <Group mt="md" mb="xs">
                <Button
                  onClick={() => handleFollowToggle(index)}
                  variant={isFollowed && "default"}
                  leftSection={
                    isFollowed ? (
                      <IconUserMinus size={14} />
                    ) : (
                      <IconUserPlus size={14} />
                    )
                  }
                >
                  {isFollowed ? "Unfollow" : "Follow"}
                </Button>
                <Button
                  onClick={() => handleDelete(index)}
                  color={"blue"}
                  leftSection={<IconTrash size={14} />}
                  variant="default"
                >
                  Delete
                </Button>
              </Group>
            </Card>
          </div>
        );
      })}
    </section>
  );
};

export default CardComponent;
