export class RepairService {

    async getRepair() {
        const res = await fetch('http://localhost:4545/repairs');
        return await res.json();
    }

    async filterRepair(type) {
        const res = await fetch(`http://localhost:4545/repairs/?type=${type}`);
        return await res.json();
    }

    async addRepair(repair) {
        const res = await fetch('http://localhost:4545/repairs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(repair)
        });
        return await res.json();
    }

    async removeRepair(id) {
        const res = await fetch(`http://localhost:4545/repairs/${id}`, {
            method: 'DELETE'
        });
        return await res.json();
    }

    async getRepairItem(id) {
        const res = await fetch(`http://localhost:4545/repairs/${id}`);
        return await res.json();
    }

    async editRepairItem(id, repair) {
        const res = await fetch(`http://localhost:4545/repairs/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(repair),
            headers: {
                "Content-Type": "application/json"
            },
        });
        return await res.json();
    }

}