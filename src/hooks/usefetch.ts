import React, { useState, useEffect } from "react";

export default function useFetch(url?: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
   // alert("effe: " + isLoading);
  }, [isLoading]);

  useEffect(() => {
    // alert("effe: " + fetchError);
  }, [fetchError]);

  const fetchData = async (
    data: object,
    url_?: string,
    method?: string,
  ): Promise<object | undefined> => {
    try {
      setIsLoading(true);

      const response = await fetch(new URL(url ?? url_), {
        method: method?.toUpperCase() ?? "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resp = await response.json();

      return resp;
    } catch (err) {
      setFetchError(err);
      console.log("useFetch error: " + err);
    }
    finally {
      setIsLoading(false);
    }
  };

  const getFetch = async (url_?: string): Promise<object | undefined> => {
    try {
      setIsLoading(true);

      const response = await fetch(new URL(url ?? url_), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resp = await response.json();

      return resp;
    } catch (err) {
      setFetchError(err);
      console.log("useFetch error: " + err);
    }
    finally {
      setIsLoading(false);
    }
  };

  return [isLoading, fetchError, fetchData, getFetch];
}
