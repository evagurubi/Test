function Event(props) {
  return (
    <div className="eventcard">
      <p>{props.key}</p>
      <p>{props.platform}</p>
      <p>{props.type}</p>
      <p>{props.number}</p>
      <p>{props.change}</p>
    </div>
  );
}

export default Event;
