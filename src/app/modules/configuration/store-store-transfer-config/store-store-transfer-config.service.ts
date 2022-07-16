import { Injectable } from "@angular/core";
import { BaseHttp } from "src/app/core/services/baseHttp.service";

@Injectable({
    providedIn: 'root',
})
export class StoreToStoreTransferConfigService extends BaseHttp {
    storeTransferUrl: string = "store-transfer";
    saveStoreTransferUrl: string = "store-transfer/save";

    getStoreTransferData(data: any) {
        return this.post<any>(this.storeTransferUrl, data);
    }

    saveStoreTransfer(data: any) {
        return this.post<any>(this.saveStoreTransferUrl, data)
    }

}
