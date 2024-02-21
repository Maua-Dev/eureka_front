// function to get the color of the task status based in the content
export const handleGetTaskContentColor = (content: string) => {
  switch (content?.toLowerCase()) {
    case "aprovado":
      return "var(--green)";
    case "reprovado":
      return "var(--red)";
    default:
      return "var(--dark-blue)";
  }
};
