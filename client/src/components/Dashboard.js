function Dashboard({ user }) {
  const { googleID } = user;

  console.log(user);
  return (
    <div>
      <h2>Dash</h2>
      <p>{googleID}</p>
    </div>
  );
}

export default Dashboard;
