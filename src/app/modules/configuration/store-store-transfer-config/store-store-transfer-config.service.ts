import { Injectable } from "@angular/core";
import { BaseHttp } from "src/app/core/services/baseHttp.service";

@Injectable({
    providedIn: 'root',
})
export class StoreToStoreTransferConfigService extends BaseHttp {
    storeTransferUrl: string = "store-transfer";

    getStoreTransferData() {
        return this.get<any>(this.storeTransferUrl);
    }

}
