import { createContext, useState, useContext, useEffect } from "react";


const JobContext = createContext();

export const useJobContext = () => useContext(JobContext);

 export const JobProvider = ({children}) =>{
    const [favorite, setFavorite]  = useState([])

    useEffect(() =>{
        const storedFavs = localStorage.getItem("favorites");

        if (storedFavs) {
            setFavorite(JSON.parse(storedFavs))
        }
    },[])

      useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);
    const addFavorite = (job) => {
    setFavorite((prev) => [...prev, job]);
  };

  const removeFromFavorite = (movieId) => {
    setFavorite((prev) =>
      prev.filter((movie) => movie.id !== movieId)
    );
  };

  const isFavorite = (movieId) => {
    return favorite.some((movie) => movie.id === movieId);
  };

  const value = {
    favorite,
    addFavorite,
    removeFromFavorite,
    isFavorite,
  };

  return (
    <JobContext.Provider value={value}>
      {children}
    </JobContext.Provider>
  );
 }