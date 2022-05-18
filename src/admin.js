import { addRepairs } from "./modules/admin/addRepairs";
import { editRepairs } from "./modules/admin/editRepairs";
import { filterRepairs } from "./modules/admin/filterRepairs";
import { getTypes } from "./modules/admin/getTypes";
import { removeRepair } from "./modules/admin/removeRepair";
import { RepairService } from "./modules/admin/repairService";

const repairService = new RepairService

getTypes(repairService)
filterRepairs(repairService)
addRepairs(repairService)
editRepairs(repairService)
removeRepair(repairService)