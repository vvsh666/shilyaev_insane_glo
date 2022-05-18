import { RepairService } from "./modules/admin/repairService";
import { UserService } from "./modules/admin/userService";
import { addRepairs } from "./modules/admin/addRepairs";
import { editRepairs } from "./modules/admin/editRepairs";
import { filterRepairs } from "./modules/admin/filterRepairs";
import { getTypes } from "./modules/admin/getTypes";
import { removeRepair } from "./modules/admin/removeRepair";
import { auth } from "./modules/admin/auth";
import { checkAuth } from "./modules/admin/checkAuth";


const repairService = new RepairService
const userService = new UserService

if (document.URL === 'http://127.0.0.1:5501/dist/admin/table.html') {
    checkAuth(userService)
    getTypes(repairService)
    filterRepairs(repairService)
    addRepairs(repairService)
    editRepairs(repairService)
    removeRepair(repairService)
} else if (document.URL === 'http://127.0.0.1:5501/dist/admin/') {
    auth(userService)
}

