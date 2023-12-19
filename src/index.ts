import { EXTENSION_ID } from './constants';
import { OnMessage, SendMessage, } from './types';
declare const window: any;

/**
 * 
 * @param message The message payload
 * @returns Promise<any> which resolves to the response from the extension
 */
export function sendMessage(message: SendMessage): Promise<any> {
    try {
        return window.chrome?.runtime.sendMessage(EXTENSION_ID, message);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};

let port: any;
try {
    port = window.chrome?.runtime.connect(EXTENSION_ID);
} catch (error) {
    console.error(error);
}

export function isConnected() {
    return !!port;
}

/**
 * 
 * @param type 
 * @param callback 
 */
export function onMessage<T>(type: string, callback: (message?: OnMessage) => Promise<T> | T) {
    port?.onMessage.addListener(async (message: any) => {
        if (message.type !== type) return;
        const messageId = message._id;
        const response = await callback(message);
        port?.postMessage({ _id: messageId, data: response });
    });
};