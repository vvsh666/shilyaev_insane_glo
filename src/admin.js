import { getTypes } from "./modules/admin/getTypes";
import { RepairService } from "./modules/admin/repairService";

const repairService = new RepairService

getTypes(repairService)