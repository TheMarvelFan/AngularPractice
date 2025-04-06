import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Request from interceptor: ", req);
  // we cannot modify a request sent from angular to api, but we can clone it and modify the clone

  if (req.method === "POST") {
    const newReq = req.clone({
      headers: new HttpHeaders({
        token: "123456"
      })
    });
    return next(newReq);
  }
  return next(req);
};
