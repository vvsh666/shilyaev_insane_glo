export class RepairService {

    async getRepair() {
        const res = await fetch('http://localhost:4545/repairs');
        return await res.json();
    }

    async filterRepair(type) {
        const res = await fetch(`http://localhost:4545/repairs/?type=${type}`);
        return await res.json();
    }
}