export const isAuth = () => {
    const token = getStorage({ key: "token", isJson: false })
    return !!token
}