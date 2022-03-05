import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SubmitGuardService } from '../services/submit-guard.service';

@Injectable({
  providedIn: 'root',
})
export class SubmitGuard implements CanActivate {
  constructor(private guard: SubmitGuardService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.guard.enter;
  }
}
