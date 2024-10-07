
export interface GenericRepositoryType<T> {
    save?: (T: any) => Promise<T>,
    update?: (T: any) => Promise<T>,
    findById?: (id: string) => Promise<T>,
    findByToken: () => Promise<T>,
    findAll?: () => Promise<T[]>,
    deleteById?: (id: string) => Promise<T>
}