import {Web3Storage} from 'web3.storage';
import type {CIDString} from 'web3.storage/dist/src/lib/interface';
import {File} from 'web3.storage';
import { Buffer } from 'buffer';

const web3StorageToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEY2MDg4YkYzMEY5ZkJmMkIxMWQ5MDhmQTI0ZDEwMjNhZGI2NTkwNTkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTE2NzA3MjU0NjcsIm5hbWUiOiJjb2RpbmctZG9qbyJ9.gBjcKpOMRSRh3aFHT3O4VwJW9lq2XB3QoiHH2aBvgJg";

function makeStorageClient() {
    return new Web3Storage({token: web3StorageToken});
}

export async function storeFiles(files: File[]): Promise<CIDString> {
    const client = makeStorageClient();
    const cid = await client.put(files, {wrapWithDirectory: false});
    console.log('stored files with cid:', cid);
    return cid;
}

export function makeFileObjects(obj) {
    const buffer = Buffer.from(JSON.stringify(obj));
    return [new File([buffer], 'metadata.json')];
}
