import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class CategorySubsService {
    private dataChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    constructor(
    ) {
    }

    dataChangedSub(): Observable<boolean> {
        return this.dataChanged.asObservable();
    }

    emitDataChanged() {
        this.dataChanged.next(true);
    }
}