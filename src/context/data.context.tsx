// DataContext.tsx
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { getData } from "../api";

interface Data {
  name: { common: string; official: string; nativeName: string };
  languages: { [key: string]: string };
  flags: { png: string };
}

interface DataContextType {
  data: Data[] | null;
  loading: boolean;
}

const initialDataContext: DataContextType = {
  data: null,
  loading: true,
};

export const DataContext = createContext<DataContextType>(initialDataContext);

export const DataContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<Data[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};
