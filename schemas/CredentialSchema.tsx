import { BSON, ObjectSchema, Realm } from "realm";

export class CredentialModel extends Realm.Object<CredentialModel> {
    id!: BSON.ObjectID;
    username!: string;
    password!: string;
    static schema: ObjectSchema = {
        name: "Credential",
        properties: {
            id: { type: "objectId", default: () => new BSON.ObjectID },
            username: "string",
            password: "string",
        },
        primaryKey: "id",
    }
}