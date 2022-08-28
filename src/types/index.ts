import { UseListStateHandlers } from "@mantine/hooks";

export interface Itodo {
  todo: string;
}

export interface AddTaskCardProps {             
  tasksHandler: UseListStateHandlers<Itodo>;
}

export interface TaskCardProps {    
  todo: Itodo
  tasksHandler: UseListStateHandlers<Itodo>;
}