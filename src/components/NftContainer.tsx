import { FC, useEffect } from "react";
import { Container, Grid } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { setNFTAssets } from "store/users";
import { LIMIT, OWNER_ADDRESS } from "utils/constants";
import { getAssetsByOwner } from "services/api";
import { getUsers } from "selectors/userSelector";
import { IOpenSeaNFT, IUserState } from "store/users/types";
import Card from "./Card";

const NftContainer: FC = (): JSX.Element => {
  const users: IUserState = useSelector(getUsers);
  const dispatch = useDispatch();
  const currentUserNFTs: IOpenSeaNFT[] = users[OWNER_ADDRESS]?.nfts || [];

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await getAssetsByOwner(OWNER_ADDRESS, LIMIT);
        dispatch(setNFTAssets({ owner: OWNER_ADDRESS, data: response?.assets }));
      } catch (error) {
        console.log("ERROR:", error);
      }
    };
    if (!users[OWNER_ADDRESS]?.nfts?.length) {
      fetchAssets();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  return (
    <Container fluid={true}>
      <Grid>
        {currentUserNFTs.map(({ token_id, image_url, name, collection }) => (
          <Grid.Col key={token_id} xs={6} md={3} lg={2}>
            <Card
              imageUrl={image_url}
              name={name}
              collection={collection.name}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default NftContainer;
