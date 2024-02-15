import { toast } from "react-toastify";

// function to make the fetch and handle the error if neccessary
export async function handleFetch(setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, showBoundary: (error : unknown) => void,  ...fetchFunctions: (() => Promise<void>)[]) {
  setIsLoading(true);
    try {
        for (const fetchFunction of fetchFunctions) {
          await fetchFunction();
        }
        setIsLoading(false);
    } catch (err) {
        console.error(err);
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        showBoundary(err);
      }
    }
}