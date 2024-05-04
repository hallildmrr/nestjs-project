import { TciketTypeModel } from "tools/models/ticket-type.model";
import { UserModel } from "../models/user.model";
import { AuditModel } from "../models/audit.model";
import { ActivityModel } from "../models/activity.model";
import { InventoryModel } from "../models/inventory.model"

export class {
    name: string;
    description: string;
    type: TciketTypeModel;
    responsible: UserModel;
    audit: AuditModel;
    activities: ActivityModel[]
    inventories: InventoryModel[]
}