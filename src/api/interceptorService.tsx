import axiosInstance from "axios";

const CancelToken = axiosInstance.CancelToken;
let cancel;

const numbers = /[0-9]/g;

/** Success interceptor handler */
const successHandler = (response: any) => {
    return response;
};

/** Request Handler to all axios connection
 *  Could put header authorization
 */
const requestHandler = (request: any) => {
    // start initial execution time on meta
    request.meta = request.meta || {};
    request.meta.requestStartedAt = new Date().getTime();
    // set cancel token request
    request.cancelToken = new CancelToken(function executor(c) {
        cancel = c;
    });

    //const token = null; // store.getState().auth.token;
    const token = localStorage.getItem('token');

    if (token) {
        request.headers["Authorization"] = `Bearer ${token}`;
        request.headers["Content-Type"] = "application/json";
        // request.headers["Access-Control-Allow-Headers"] =
        //   "Origin, X-Requested-With, Content-Type, Accept";
        return request;
    } else {
        request.headers["Content-Type"] = "application/json";
        return request;
    }
};

const instanceInterceptor = {
    responseInterceptor: (instance: any) => {
        /** Enabling response Interceptors handler */
        instance.interceptors.response.use(
            (response: any) => successHandler(response),
            (error: any) => {
                if (error.response.status === 401) {
                    const token = localStorage.getItem("token");
                    if (!token) {
                        localStorage.clear();
                    }
                    window.location.href = "/login";
                } else if (error.response.status === 404) {
                    throw new Error(`${error.config.url} not found`);
                }
                throw error;
            }
        );
    },
    requestInterceptor: (instance: any) => {
        instance.interceptors.request.use((request: any) =>
            requestHandler(request)
        );
    },
};

export default instanceInterceptor;
