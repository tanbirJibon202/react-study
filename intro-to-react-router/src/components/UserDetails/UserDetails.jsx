import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
  const user = useLoaderData();

  const { userId } = useParams();
  console.log(userId);

  // const params = useParams();
  // console.log(params.userId);
  // console.log(user);
  const { website, name } = user;
  return (
    <div>
      <h3>User Details here</h3>
      <h4>Name: {name}</h4>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetails; <h3>User Details here</h3>