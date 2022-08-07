import { ChangeEvent, useCallback, useState } from "react";

const API = process.env.API_URL || "http://localhost:4000";

export type ApiData = {
  nounce: number;
  hash: string;
};

export type ApiError = {
  error: string;
};

const validate = (str: string) => {
  const re = /^[0-9A-Fa-f]{64}$/;
  return re.test(str);
};

export const useApp = () => {
  const [apiData, setApiData] = useState<ApiData | null>(null);
  const [apiError, setApiError] = useState<string>("");
  const [text, setText] = useState("");
  const [btnDisabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (error) {
        setError("");
      }

      setText(e.target.value);
    },
    [error]
  );

  const handleSubmit = useCallback(async () => {
    if (!validate(text)) {
      setError("invalid hex");
      return;
    }

    setApiData(null);
    setApiError("");
    setDisabled(true);

    const results = await fetch(`${API}?hex=${text}`).catch((err) => ({
      json: () => ({ error: "Server Unavailable" }),
    }));

    const data: ApiData | ApiError = await results.json();

    setDisabled(false);

    if ("error" in data) {
      setApiError(data.error);
    } else {
      setApiData(data);
    }
  }, [text]);

  return {
    apiData,
    apiError,
    text,
    handleChange,
    handleSubmit,
    btnDisabled,
    error,
  };
};
