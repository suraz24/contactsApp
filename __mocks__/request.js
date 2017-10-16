function request(url) {
    return new Promise((resolve, reject) => {
        process.nextTick(
            () => contacts ? resolve(contacts) : reject({
                    error: 'No contacts found.',
                })
        )
        // const lastSlash = url.lastIndexOf('/')
        // const userID = url.substring(lastSlash + 1)
    });
}