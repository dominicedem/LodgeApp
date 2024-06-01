import { useState } from "react";

export function useMyPosition(defaultPosition = null) {
  const [isLoading, setIsloading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState();

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser doesn't support geolocation");
    setIsloading(true);
    navigator.geolocation.getCurrentPosition(
      (geoPosition) => {
        setPosition([
          geoPosition.coords.latitude,
          geoPosition.coords.longitude,
        ]);
        setIsloading(false);
      },
      (error) => {
        setError(error.message);
        setIsloading(false);
      }
    );
  }
  return { isLoading, position, error, getPosition };
}
