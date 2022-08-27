import { UseListStateHandlers } from "@mantine/hooks";

export interface Itodo {
  todo: string;
}

export interface AddTaskCardProps {             //In future will try to merge AddTaskCardProps with TaskCardProps
  tasksHandler: UseListStateHandlers<Itodo>;
}

export interface TaskCardProps {    
  todo: Itodo
  tasksHandler: UseListStateHandlers<Itodo>;
}