import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { itemActions } from "../Store/itemsSlice";
const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) {
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((item) => {
        dispatch(itemActions.addInitialItem(item[0]));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <div>
      FetchDone: {fetchStatus.fetchDone}
      CurrentlyFetching: {fetchStatus.currentlyFetching}
    </div>
  );
};
export default FetchItems;
