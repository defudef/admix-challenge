const DEFAULT_INIT: RequestInit = {
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/json',
  },
};

type ApiResponse<T> = (data: any) => Promise<T>

const makeInit = (method: string, body?: object): RequestInit => ({
  ...DEFAULT_INIT,
  method,
  ...(body && { body: JSON.stringify(body) }),
});

export const post = <TBody extends object = object, TResponse = unknown, TMakeBody extends object = TBody>(url: string, makeBody?: (data: TMakeBody) => object): ApiResponse<TResponse> => (
  async (data: TMakeBody) => {
    const body =  makeBody ? makeBody(data) : data;

    const response = await fetch(`/api/${url}`, makeInit('post', body));

    return response.ok
      ? response.json()
      : Promise.reject(data);
  }
);

export const put = <TBody extends object = object, TResponse = unknown, TMakeBody extends object = TBody>(url: string, makeBody?: (data: TMakeBody) => object): ApiResponse<TResponse> => (
  async (data: TMakeBody) => {
    const response = await fetch(`/api/${url}`, makeInit('put', makeBody ? makeBody(data) : data));

    return response.ok
      ? response.json()
      : Promise.reject(data);
  }
);
