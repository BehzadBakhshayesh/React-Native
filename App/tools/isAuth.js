import { getStorage } from "./storage"

export const isAuth = () => {
    const token = getStorage({ key: "token", isJson: false })
    return !!token
}