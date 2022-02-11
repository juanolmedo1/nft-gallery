import { FC, useEffect } from "react";
import { Header, Badge } from "@mantine/core";
import { OWNER_ADDRESS } from "utils/constants";
import { getUserBalance } from "services/web3";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "selectors/userSelector";
import { IUserState } from "store/users/types";
import { setUserBalance } from "store/users";

const HeaderComponent: FC = (): JSX.Element => {
  const users: IUserState = useSelector(getUsers);
  const dispatch = useDispatch();
  const currentUserBalance: string = users[OWNER_ADDRESS]?.balance || "0.0000";

  useEffect(() => {
    const fetchBalance = async () => {
      const ether = await getUserBalance(OWNER_ADDRESS);
      dispatch(setUserBalance({ owner: OWNER_ADDRESS, balance: ether }));
    };
    if (!users[OWNER_ADDRESS]?.balance) {
      fetchBalance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Header
      height={80}
      padding="sm"
      style={{
        backgroundColor: "#00152f",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        display: "flex",
      }}
    >
      <img
        src="https://constellationnetwork.io/wp-content/uploads/2021/04/Constellation-Logo_White.png"
        width="150"
        alt="Constellation Logo"
      />
      <Badge variant="light" color="yellow" size="lg">
        {currentUserBalance} ETH
      </Badge>
    </Header>
  );
};

export default HeaderComponent;
