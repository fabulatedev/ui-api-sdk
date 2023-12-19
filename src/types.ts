export enum SendMessageType {
    PING = 'ping',
}

export interface SendMessage {
    type: SendMessageType | string;
    data?: any;
}

export enum OnMessageType { }

export interface OnMessage {
    type: OnMessageType | string;
    data?: any;
}