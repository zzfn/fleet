import http from "../utils/http";

export const listArticles = (params: any) => {
    return http<any>({
        method: 'get',
        url: '/article/page',
        params,
    });
};
