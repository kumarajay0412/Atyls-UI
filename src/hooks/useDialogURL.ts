import useUrlQuery from "./useUrlQuery";

interface UseDialogURLProps {
  dialogId: string;
}
export const queryParamName = "dialog";

function useDialogURL({ dialogId }: UseDialogURLProps) {
  const { queryParams, updateQueryParam, deleteQueryParam } = useUrlQuery();

  const openDialog = (path?: string) => {
    updateQueryParam(queryParamName, dialogId, path);
  };

  const isDialogOpen = queryParams.get(queryParamName) === dialogId;

  const closeDialog = () => {
    deleteQueryParam(queryParamName);
  };

  return {
    openDialog,
    closeDialog,
    isDialogOpen,
  };
}

export default useDialogURL;
