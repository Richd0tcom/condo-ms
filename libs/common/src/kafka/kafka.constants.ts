export const KAFKA_TOPICS = {
    CREATE_COMPANY: 'create-company',
    COMPANY_CREATED: 'company-created',
} as const;
  
export type KafkaTopic = typeof KAFKA_TOPICS[keyof typeof KAFKA_TOPICS];

export const enum KAFKA_CLIENTS {
    AUTH_SERVICE = 'AUTH_SERVICE',
    NOTIFICATION_SERVICE = 'NOTIFICATION_SERVICE',
}

export const enum KAFKA_GROUP_IDS {
    AUTH_SERVICE_GROUP = 'auth-service-group',
    NOTIFICATION_SERVICE_GROUP = 'notification-service-group',
}