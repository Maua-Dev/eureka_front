import { toast } from "react-toastify";

// function to make the fetch handle the loading state and the error if neccessary
export async function handleFetch(
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  showBoundary: (error: unknown) => void,
  ...fetchFunctions: Promise<unknown>[]
) {
  setIsLoading(true);
  try {
    for (const fetchFunction of fetchFunctions) {
      await fetchFunction;
    }
    setIsLoading(false);
  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      toast.error(err.message);
    } else {
      showBoundary(err);
    }
    // TODO: threat the infinite loading
    /*  setTimeout(() => {
      setIsLoading(false);
    }, 3000); */
  }
}
