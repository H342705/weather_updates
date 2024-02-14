"use client";
import { createContext, useContext, useState } from "react";

const locationContext = createContext<any>({
  location: "",
  setLocation: () => {},
});

export const useLocationContext = () => useContext(locationContext);

export const LocationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [location, setLocation] = useState("");

  return (
    <locationContext.Provider value={{ location, setLocation }}>
      {children}
    </locationContext.Provider>
  );
};
