import { GenericRepositoryType } from './../types/genericRepository';
import axiosConfig from './axiosConfig';

class GeneralRepositoryServices<T> implements GenericRepositoryType<T> {
    protected resources: string;
    constructor(resources: string) {
        this.resources = resources;
    }
    public async findById(id: string) {
        return await axiosConfig.get<T, T>(`/${this.resources}/${id}`);
    }
    public async findByToken() {
        return await axiosConfig.get<T, T>(`/${this.resources}`);
    }
    public async save(data: Partial<T>) {
        return await axiosConfig.post<T, T>(`/${this.resources}`, data)
    }
    public async deleteById(id: string) {
        return await axiosConfig.delete<T, T>(`/${this.resources}/${id}`)
    }
}

export default GeneralRepositoryServices;