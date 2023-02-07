import fetch from 'unfetch'

type RequestOptions = {
    url: string
    method?: 'GET' | 'POST'
    data?: unknown
}

export const makeRequest = <T extends unknown>({ url, method = 'GET', data }: RequestOptions): Promise<T> =>
    new Promise((resolve, reject) => {
        fetch(
            url,
            {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        ).then( (r: { json: () => T | PromiseLike<T> }) => {
            resolve(r.json());
        }).catch(() => reject())
    })
