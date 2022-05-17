import { filterRepairs } from "./modules/admin/filterRepairs";
import { getTypes } from "./modules/admin/getTypes";
import { render } from "./modules/admin/render";
import { RepairService } from "./modules/admin/repairService";

const repairService = new RepairService

getTypes(repairService)
filterRepairs(repairService)
render()