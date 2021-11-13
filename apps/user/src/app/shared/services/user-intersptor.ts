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
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MmMwNzFmYy02YmUzLTQ1MzYtYmYzNC05YTAwNzIzYTViNzUiLCJqdGkiOiIwYTRiZjgwZmUyMjUwNDg1ZDIyZjFhNTYyZDVkODdmMzRmNzU1MTk2MDQ4Y2IyMmQ5NjQwNDcxNDk2ZjM3ZjEyZTdkOWFkNDI0NGFjYTc5MSIsImlhdCI6IjE2MzY4MDc2MDYuNTgwMTk4IiwibmJmIjoiMTYzNjgwNzYwNi41ODAyMDEiLCJleHAiOiIxNjY4MzQzNjA2LjU3NjE4OSIsInN1YiI6IjJhYmM4NGI0LTFhMzItNGQ1ZC04NzYyLTMzZmRlOTgzNTMwZSIsInNjb3BlcyI6W119.i7aDjD1fMBaplgaAFlo1Q9xmZRMJ6F9cqCUcsA6umrolw1hPi91aO9OQhxlddfAwrIIWMXqbDIYlO6hc80OVf1QDDDqqgowTSuoRy7sSqtwP29bMh5MCQT5LKX5y2_6T7-llPcsr4bF9RZMuUsn-Bsp7XiF3ExwZTuALRIXhfoia3w4OCoVMAa63ddgORW0Q_1kFuS1bwsGXTLeF09ut2rLNME9536qy1AbK13ITzyMPUy6aYUH8oUp4tg2Lnl6N_UuhwF1A4zm4a2xRZgXRk5cN8iCDVHhCxi-pizmsDZagTYTvcvwKRlB6yEAklqcYH0FJ-jcWGiaYdfz61MGaJgougXe3xAImHVH40EnMw3mPmsS-uxpoS-ajM6ftQw62uEzzsluSxuJMMrE9DtiqVKIeD_5B6tIcMHpUkONmMTMDeoIz0sD9pnONFiASJl45sLfgZjVimin_bDO5cwhnNrpc10TV1XU7E5AqUAFWObx6eQqlI2ZM1S6D-PFKUK_L8eYNp8RWW78Kna-4ezJpKIPG78k0harCfuO41_dsXy7mOddFD4i9BicyR7k4rQz9bS_D3c5B3hWZ9aSrlEjW4I4TD7BsEOIJrTUDaU1IzEhaTusvAAQiJDm4UrH5QYUhLMneF1oFij35DyDdvty8PoPsgFRenUcT15VV9q-v2ns'
      ),
    });
    return next.handle(authRequest);
  }
}
