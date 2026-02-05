export const nomeMaiusculo = (name: string) => {
    if(!name) {
        return name
    }

    const firstLetter = name.charAt(0).toUpperCase()

    const string = name.slice(1)

    return firstLetter + string


}