interface ErrorMessageProps {
  condition: boolean;
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  condition,
  message,
}) => {
  return condition ? <p className="text-red">{message}</p> : null;
};

export default ErrorMessage