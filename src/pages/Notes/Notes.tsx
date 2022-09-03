import { FC } from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";

type tNotesProps = {
  [key: string]: any;
};

export const Notes: FC<tNotesProps> = () => {
  return <PageLayout>Notes text ...</PageLayout>;
};
