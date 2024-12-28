import { useSelector } from "react-redux";
const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <div>
      FetchDone: {fetchStatus.fetchDone}
      CurrentlyFetching: {fetchStatus.currentlyFetching}
    </div>
  );
};
export default FetchItems;
