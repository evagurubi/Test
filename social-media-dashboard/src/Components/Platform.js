function Platform({ type, name, followers, differ }) {
  return (
    <div className="platformcard">
      <h1>Hello Platform</h1>
      <p>{type}</p>
      <p>{name}</p>
      <p>{followers}</p>
      <p>{differ}</p>
    </div>
  );
}

export default Platform;
