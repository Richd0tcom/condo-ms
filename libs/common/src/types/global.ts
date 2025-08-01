export class ServiceResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
    error?: any;
}