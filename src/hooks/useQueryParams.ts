import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const useQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQueryParams = (params: Record<string, string | null>) => {
    const query = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        query.set(key, value);
      } else {
        query.delete(key);
      }
    });

    // Update the URL with new query params
    router.push(`?${query.toString()}`);
  };

  const getQueryParam = (key: string) => {
    return searchParams.get(key);
  };

  return { updateQueryParams, getQueryParam };
};

export default useQueryParams;
