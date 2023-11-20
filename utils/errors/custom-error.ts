class CustomError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
    this.statusCode = this.statusCode;
  }
}

const createCustomError = (message: string, statusCode?: number) =>
  new CustomError(message, statusCode ?? 500);

export { CustomError, createCustomError };
