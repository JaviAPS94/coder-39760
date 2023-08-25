import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UsersDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    name: string;
    @Prop()
    email: string;
    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
