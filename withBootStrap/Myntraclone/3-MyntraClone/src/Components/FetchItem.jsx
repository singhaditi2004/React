import { useSelector, useEffect } from "react-redux";
const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setFetching(false);
      });
      
  }, []);

  return (
    <div>
      FetchDone: {fetchStatus.fetchDone}
      CurrentlyFetching: {fetchStatus.currentlyFetching}
    </div>
  );
};
export default FetchItems;
