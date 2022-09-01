import { FC } from "react";

interface IError {
  message: string | null;
}

const Error: FC<IError> = ({ message }) => <h3>{message}</h3>;

export default Error;
