import { FC, useEffect } from "react";
import { Container, Grid } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { setNFTAssets } from "store/nfts";
import { LIMIT, OWNER_ADDRESS } from "utils/constants";
import { getAssetsByOwner } from "services/api";
import { getNFTs } from "selectors/nftSelectors";
import { INFTAssets, IOpenSeaNFT } from "store/nfts/types";
import Card from "./Card";

const NftContainer: FC = (): JSX.Element => {
  const assets: INFTAssets = useSelector(getNFTs);
  const dispatch = useDispatch();
  const currentOwner: IOpenSeaNFT[] = assets[OWNER_ADDRESS];

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await getAssetsByOwner(OWNER_ADDRESS, LIMIT);
        dispatch(setNFTAssets({ owner: OWNER_ADDRESS, data: response?.assets }));
      } catch (error) {
        console.log("ERROR:", error);
      }
    };
    if (!assets[OWNER_ADDRESS]?.length) {
      fetchAssets();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assets]);

  return (
    <Container fluid={true}>
      <Grid>
        {currentOwner && currentOwner.map(({ token_id, image_url, name, collection }) => (
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
