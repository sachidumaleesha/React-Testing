import { FavoriteFoods } from "./FavoriteFoods";
import { UserName } from "./UserName";

export const UserProfile = () => {
  return (
    <div>
      <UserName name="Diwan Sachidu" age={24} foods={[
          {
            name: "Noodles",
            id: 1,
          },
          {
            name: "Rice",
            id: 2,
          },
          {
            name: "Pasta",
            id: 3,
          }
        ]}/>
    </div>
  );
};
