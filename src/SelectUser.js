import React from "react";
import { Button } from "semantic-ui-react";

const SelectUser = props => {
  console.log(props);
  return (
    <div>
      {props.users.map(user => {
        return <Button onClick={props.updateUser}>{user}</Button>;
      })}
    </div>
  );
};

export default SelectUser;
