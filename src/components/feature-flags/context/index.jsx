import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  const fetchFeatureFlags = async () => {
    try {
      setLoading(true);
      // Original external API Service call
      const response = await featureFlagsDataServiceCall();
      console.log(response);
      setEnabledFlags(response);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ enabledFlags, loading }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
