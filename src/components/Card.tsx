import { FC } from "react";
import { Card, Image, Text } from "@mantine/core";

interface CardProps {
  imageUrl: string;
  name: string;
  collection: string;
};

const CardFC: FC<CardProps> = ({ imageUrl, name, collection }): JSX.Element => {
  return (
    <Card style={{ minHeight: 500 }} shadow="lg" radius={10} padding="xl">
      <Card.Section>
        <Image src={imageUrl} height={280} fit="cover" />
      </Card.Section>
      <Text mt={20} size="md" weight={400} color="gray">
        {collection}
      </Text>
      <Text size="lg" weight={800}>
        {name}
      </Text>
    </Card>
  );
};

export default CardFC;