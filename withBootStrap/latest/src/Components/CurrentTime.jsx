const CurrentTime = () => {
  let time = new Date();

  return <>{time.toLocaleTimeString()}</>;
};

export default CurrentTime;
