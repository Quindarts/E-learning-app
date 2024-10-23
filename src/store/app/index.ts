import { create } from "zustand"

type AppStateType = {
    globalLoading: boolean,
}
type AppActionType = {
    onLoading: () => void,
    unLoading: () => void,
}

const useAppStore = create<AppStateType & AppActionType>((set) => ({
    globalLoading: false,
    onLoading: () => set(() => ({ globalLoading: true })),
    unLoading: () => set(() => ({ globalLoading: false }))
}))

export default useAppStore