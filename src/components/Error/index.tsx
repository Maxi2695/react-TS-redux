import React, { FC } from "react";

interface IError {
  message: string | null;
}

const Error: FC<IError> = ({ message }) => <h1>{message}</h1>;

export default Error;
