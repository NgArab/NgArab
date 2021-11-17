import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    /*  const AuthToken = localStorage.getItem('token_agzz'); */
    const authRequest = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Bearer ' +
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MmMwNzFmYy02YmUzLTQ1MzYtYmYzNC05YTAwNzIzYTViNzUiLCJqdGkiOiIxYWQyM2RiMjY1NWFmMjhkMDg4ZmEwZjE1NDJjMjJmZDMzMTc2Yzk5ZDQxZmFhMzBhM2M3M2IzNzczZmRkYjllMzQwYmVhNzk0YTMwMmRiYSIsImlhdCI6IjE2MzcxNjk1MTcuNDkyMjE5IiwibmJmIjoiMTYzNzE2OTUxNy40OTIyMjIiLCJleHAiOiIxNjY4NzA1NTE3LjQ4NzU5MSIsInN1YiI6ImUzMjg2YmI0LWMyNWMtNGQ3NC1hZGMyLTVhYjA0MjU2OTkxZiIsInNjb3BlcyI6W119.wI-KKrGwlOirO-hUcss4OTkztzUTY_griaICYMdfaOAHnjQJk7a8G4BPhUF2KhYCQzq0ybRjoOgKOkfEa-24lYNTWK4BXlMAfT8Y84X20XFN7iFqnDeyQqOk4le5BONmmE6lhTUPCGyhpebgjzqL5zzQmQ7fny-SJipRjCqmH4XepfbH9s4JW-WEwWsYKc58zAiQpSbDXkxJ8nYG5mhcRCS1E6fa2RARmCOgwmdlcDF-zhpZWqEsxy-HfUxEajP3nBaj-Du_POefNbFr3qqqeZF1NSpgjFk2koAR9aSSPb9vTHbSP6lCdWR2tVMal66GzKoSmdUcy7No_uMuehHxziYz1_ga-G0PByPT_HJKxdkc-EVCadMyDflJk1AWLOqjUmX2JO0lFTZLDlZWgK2EaMCWT3C21u7hOi3tcR4tuagWVyT6T9LQl-fo5JLOSvx-CKHziBW_0KEltTEGhBNASqsNqkoJxwyP-RgvWreTHr4tD6oMenRIVzAX2HfuTb_AkRDh72SRW7EDc1xtGCL8CUY6SiH-6nu_BaRhIGcmdNJXqZ3WcWzuyu_hF8We6YISuOf6k58nNo-woOUbK_2nD015hkf1q_l8_O7363LYG6J5ss6FWtHs-8mfpnEsPWa8jj02YU89ZhhdTsD5HM5ILTE6xjXPgyQA_Am9_x4ah9c'
      ),
    });
    return next.handle(authRequest);
  }
}
