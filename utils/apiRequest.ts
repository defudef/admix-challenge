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

export const post = <TBody extends object = object, TResponse = unknown>(url: string): ApiResponse<TResponse> => (
  async (data: TBody) => {
    const response = await fetch(`/api/${url}`, makeInit('post', data))

    if (!response.ok) {
      return Promise.reject(data);
    }

    return response.json();
  }
);

export const put = <TBody extends object = object, TResponse = unknown>(url: string): ApiResponse<TResponse> => (
  async (data: TBody) => {
    const response = await fetch(`/api/${url}`, makeInit('put', data))

    if (!response.ok) {
      return Promise.reject(data);
    }

    return response.json();
  }
);
